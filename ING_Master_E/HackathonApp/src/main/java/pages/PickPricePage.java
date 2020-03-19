package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class PickPricePage {

	public WebDriver driver;
	@FindBy(xpath="//span[@id='prod_price'] ")
	private WebElement pickprice;
	
	@FindBy(xpath="(//span[@class='step1 M16_white'])[1] ")
	private WebElement addtocart;
	
	@FindBy(xpath="(//span[@class='step1 M16_white'])[1]   ")
	private WebElement gotocartbtn;
	
	
	public void pickPrice(){
		
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		pickprice.click();;
		
	}
	public void addCart(){
		
		addtocart.click();
	}
	public void goToCart(){
		
		gotocartbtn.click();
	}
}
