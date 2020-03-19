package pages;

import static io.restassured.RestAssured.given;

import org.junit.Assert;
import org.junit.Test;

import io.restassured.RestAssured;
import io.restassured.response.Response;
import io.restassured.specification.RequestSpecification;
import io.restassured.http.Method;


public class GetTickerPage {

	@Test
	public void getCall(){
		
	RestAssured.baseURI = "https://www.bitfinex.com/t";
	RequestSpecification httpRequest = RestAssured.given();
	Response response = httpRequest.request(Method.GET, "/BTCUSD/");
	String responseBody = response.getBody().asString();
	//System.out.println("Response Body is =>  " + responseBody);
	System.out.println("Response code -"  +response.getStatusCode());
    Assert.assertTrue(response.getStatusCode()==200);


	Response response2 = httpRequest.request(Method.GET, "/LTCBTC/");
	String responseBody2 = response2.getBody().asString();
	//System.out.println("Response Body is =>  " + responseBody2);
	System.out.println("Response code 2-"  +response2.getStatusCode());
    Assert.assertTrue(response2.getStatusCode()==200);

	
	Response response23 = httpRequest.request(Method.GET, "/ETCBTC/");
	String responseBody23 = response23.getBody().asString();
	//System.out.println("Response Body is =>  " + responseBody23);
	System.out.println("Response code 23-"  +response23.getStatusCode() + " " +		response23.getContentType());
	response23.getContentType();
    Assert.assertTrue(response23.getStatusCode()==200);
    Assert.assertTrue(response23.getContentType().contains("text/html; charset=utf-8"));
    response23.getStatusLine();
	System.out.println("Response code 23-"  +response23.getStatusCode() + " " +         response23.getStatusLine());

	
	
	
	
	
	
	
	
}

	}
