$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/FirstCry.feature");
formatter.feature({
  "name": "Validate the price and add cart process",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Validate the given data",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "launch the url",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.launch_the_url()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate from the All Categories link",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.navigate_from_the_All_Categories_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "navigate to offers link",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.navigate_to_offers_link()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d80.0.3987.149)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027LP-5CD9174B31\u0027, ip: \u002710.117.189.201\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_181\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 80.0.3987.149, chrome: {chromedriverVersion: 80.0.3987.106 (f68069574609..., userDataDir: C:\\Users\\GALI~1.MYT\\AppData...}, goog:chromeOptions: {debuggerAddress: localhost:58778}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: fcdc3ffbc0812b5f0c070e0ade36e38c\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy14.click(Unknown Source)\r\n\tat pages.HomePage.offersBut(HomePage.java:46)\r\n\tat stepdefinition.FirstCryStep.navigate_to_offers_link(FirstCryStep.java:43)\r\n\tat ✽.navigate to offers link(file:///C:/Users/gali.mythily/workspace/HackathonApp/./Features/FirstCry.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "navigate to click on Home and Safety and Toys and Gaming",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.navigate_to_click_on_Home_and_Safety_and_Toys_and_Gaming()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "pick anyone",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.pick_anyone()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "capture price",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.capture_price()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "add cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.add_cart()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "goto cart",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinition.FirstCryStep.goto_cart()"
});
formatter.result({
  "status": "skipped"
});
});