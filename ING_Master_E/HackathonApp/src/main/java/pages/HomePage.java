package pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import stepdefinition.FirstCryStep;

public class HomePage extends FirstCryStep {

		
	public HomePage(WebDriver driver){
		
		this.driver= driver;
		//PageFactory.initElements(driver, HomePage.class);
		
	}
	
	
	//@FindBy(xpath="//a[text()='All Categories']")
	//private WebElement categorieslink;
	
	@FindBy(xpath="//a[text()='OFFERS']")
	private WebElement oferslink;
	
	public void categoriesLinkBtn() throws InterruptedException{
		
		/*System.out.println("Hello ....");
		
		Actions act = new Actions(driver);
		act.moveToElement(driver.findElement(By.xpath("//a[text()='All Categories'"))).build().perform();*/
		driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		Actions action = new Actions(driver);
		WebElement we = driver.findElement(By.xpath("//a[text()='All Categories']"));
		action.moveToElement(we).build();
		action.click().perform();
	
	}
	public void offersBut(){
		//driver.manage().timeouts().implicitlyWait(20,TimeUnit.SECONDS);
		oferslink.click();
		
	}
	
	
	
	
	
}
