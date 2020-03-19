package pages;

import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class HealthSafety {

	public WebDriver driver;
	@FindBy(xpath="//a[text()=' Health & Safety']")
	private WebElement hlthandsfty;
	
	@FindBy(xpath="//a[text()='Runbugz Mosquito Repellent Patches - 30 Patches']")
	private WebElement firstItmName;
	
	public void healthSafe(){
		hlthandsfty.click();
	}
	public void pickItem(){
		/*JavascriptExecutor js = (JavascriptExecutor)driver;
		js.executeScript("arguments[0].click();",firstItmName);*/
		firstItmName.click();
		
	}
}
