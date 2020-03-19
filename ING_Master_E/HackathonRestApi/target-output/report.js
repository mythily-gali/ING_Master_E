$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/ticker.feature");
formatter.feature({
  "name": "getting the data from response",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "getting infomation from bitfix",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "set the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.BitfixStep.set_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "hit the url",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.BitfixStep.hit_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "get the response from the request",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinition.BitfixStep.get_the_response_from_the_request()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c200\u003e but was:\u003c500\u003e\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.failNotEquals(Assert.java:743)\r\n\tat org.junit.Assert.assertEquals(Assert.java:118)\r\n\tat org.junit.Assert.assertEquals(Assert.java:555)\r\n\tat org.junit.Assert.assertEquals(Assert.java:542)\r\n\tat pages.GetTickerPage.validateResponseStatusCode(GetTickerPage.java:30)\r\n\tat stepdefinition.BitfixStep.get_the_response_from_the_request(BitfixStep.java:25)\r\n\tat ✽.get the response from the request(file:///C:/Users/gali.mythily/workspace/HackathonRestApi/src/test/java/features/ticker.feature:7)\r\n",
  "status": "failed"
});
});