import pytest
from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.chrome.options import Options


driver_exe = "chromedriver"
options = Options()
options.add_argument("--headless")
driver = webdriver.Chrome(driver_exe, options=options)


@pytest.fixture(autouse=True)
def selenium_close():
    yield

    driver.close()


def test_get_tables_lambda_handler():
    driver.get("http://www.natekester.com")

    content = driver.find_element(By.TAG_NAME, "h1")

    assert content.text == "Nate Kester"
