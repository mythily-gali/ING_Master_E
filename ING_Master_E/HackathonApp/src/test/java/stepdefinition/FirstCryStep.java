package stepdefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.PageFactory;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.HealthSafety;
import pages.HomePage;
import pages.PickPricePage;

public class FirstCryStep {

	public WebDriver driver=null;;
	
	@Given("^launch the url$")
	public void launch_the_url() throws InterruptedException {
	    
		System.setProperty("webdriver.chrome.driver","Drivers\\chromedriver.exe");
		driver = new ChromeDriver();
		driver.get("https://www.firstcry.com");
		driver.manage().window().maximize();
		Thread.sleep(3000);
		
	}

	@When("^navigate from the All Categories link$")
	public void navigate_from_the_All_Categories_link() throws InterruptedException {
	    
		HomePage home = new HomePage(driver);
		
		System.out.println("Hello");
		home.categoriesLinkBtn();
	}

	@And("^navigate to offers link$")
	public void navigate_to_offers_link() {
	    
		HomePage ofers = PageFactory.initElements(driver,HomePage.class);
		ofers.offersBut();
	}

	@And("^navigate to click on Home and Safety and Toys and Gaming$")
	public void navigate_to_click_on_Home_and_Safety_and_Toys_and_Gaming() {
	  HealthSafety safe=   PageFactory.initElements(driver,HealthSafety.class);
		safe.healthSafe();
	}

	@And("^pick anyone$")
	public void pick_anyone() {
	    
		HealthSafety pick = PageFactory.initElements(driver,HealthSafety.class);
		pick.pickItem();
		
	}
	@And("^capture price$")
	public void capture_price(){
		PickPricePage price = PageFactory.initElements(driver,PickPricePage.class);
		price.pickPrice();
		
	}
	@And("^add cart$")
	public void add_cart() {
	    	
		PickPricePage add = PageFactory.initElements(driver,PickPricePage.class);
		add.addCart();
	}

	@And("^goto cart$")
	public void goto_cart() {
	 
		PickPricePage gotobtn = PageFactory.initElements(driver,PickPricePage.class);
		gotobtn.goToCart();
	}

}
