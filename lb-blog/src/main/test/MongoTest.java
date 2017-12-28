import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Sort;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.data.domain.Sort.Order;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import com.lb.blog.dto.PageDto;
import com.lb.blog.dto.SpringDataPageable;


@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration({ 
	"classpath:spring/applicationContext-mongo.xml"})
public class MongoTest {
	
	@Autowired
	private MongoTemplate mongoTemplate;

	
	@Test
	public void testQuery() {
		SpringDataPageable pageable = new SpringDataPageable();
		Query query = new Query();
		List<Order> orders = new ArrayList<Order>();
		orders.add(new Order(Direction.DESC, "updateDate"));
		Sort sort = new Sort(orders);
		pageable.setPagenumber(1);
		pageable.setPagesize(10);
		pageable.setSort(sort);
		Long count = mongoTemplate.count(query, PageDto.class, "page");
		System.out.println(count);
		List<PageDto> list = mongoTemplate.find(query.with(pageable), PageDto.class, "page");
		Page<PageDto> pagelist = new PageImpl<PageDto>(list, pageable, count);
		for (PageDto pageDto : pagelist) {
			System.out.println(pageDto.getPageTitle());
		}
	}
	@Test
	public void testInsert() {
		PageDto page=new PageDto();
		page.setInsertDate(new Date().toString());
		page.setPageTitle("Java虚拟机运行时数据区域");
		page.setPageContent("程序计数器:说白了就是指示当前线程执行的字节码执行到哪了 (当前线程所执行的字节码的行号指示器 )");
		mongoTemplate.insert(page,"page");
	}
}
