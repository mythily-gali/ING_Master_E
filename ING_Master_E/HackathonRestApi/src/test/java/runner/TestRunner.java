package runner;

import org.junit.runner.RunWith;

import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;

@RunWith(Cucumber.class)
@CucumberOptions(features="C:/Users/gali.mythily/workspace/HackathonRestApi/src/test/java/features/ticker.feature" ,
glue={"stepdefinition" }
, strict=true,
monochrome=true,
plugin={"pretty" ,"html:target-output"})

public class TestRunner {

}
