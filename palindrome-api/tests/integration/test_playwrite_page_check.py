from playwright.sync_api import Playwright, sync_playwright


def run_recording_of_main_UI_items(playwright: Playwright) -> None:
    browser = playwright.chromium.launch(headless=True)
    context = browser.new_context()
    page = context.new_page()
    page.goto("https://natekester.com/")
    page.goto("https://natekester.com/#/about-me")
    page.get_by_role("img", name="A picture of what I look like.").click()
    page.get_by_role("heading", name="Hi! I'm Nate").click()
    page.get_by_role("img", name="AWS CCP cert logo").click()
    page.get_by_role(
        "heading",
        name="I am a Full Stack Software Engineer at Pluralsight. I started out my Engineering in Manufacturing, utilizing code to solve manufacturing problems. I transitioned to Software Engineering in Tech, and have loved every moment of it, carrying over all the quality assurance lessons. I work mainly in Python and Javascript (React/Node), but I believe in using the right tool for the job. Backend Code is my passion, but I believe in being well rounded.",
    ).click()
    page.get_by_role(
        "heading",
        name="As for hobbies - I love 3D printing, photography, and have recently found a passion for learning music and guitar.",
    ).click()
    page.get_by_role("link", name="Career").click()
    page.get_by_role("img", name="A picture of what I look like.").click()
    page.get_by_role("img", name="Hexcel Logo").click()
    page.get_by_role("img", name="moxtek logo").click()
    page.get_by_role(
        "heading", name="Software Engineer II (Remote) - Pluralsight"
    ).click()
    page.get_by_role("heading", name="Manufacturing Engineer - Hexcel").click()
    page.get_by_role("heading", name="Quality Engineer - Moxtek").click()
    page.get_by_role(
        "heading",
        name="At Pluralsight I have created tooling to provide an entirely custom assessment experience. I enjoyed the opportunity to train every member of my team, implement new documentation practices, testing patterns, and push sustainable clean code practices.",
    ).click()
    page.get_by_role(
        "heading",
        name="At Hexcel I had the goal of creating quality aerospace parts and making processes more efficient. I built stringent quality practices, and implemented python statistical analyses to evaluate hundreds of processes in order to direct our team to areas of improvement.",
    ).click()
    page.get_by_role(
        "heading",
        name="My responsibilities were around reducing defects. I did so by discovering better practices, creating technical documentation, and writing software tooling. I created C# applications that monitored tooling conditions, and Python tooling to analyze root cause for repetitive defects.",
    ).click()
    page.get_by_role("link", name="Education").click()
    page.get_by_role("heading", name="University of Utah").click()
    page.get_by_role("heading", name="Software Certification").click()
    page.get_by_role("img", name="UofU logo").click()
    page.get_by_role("img", name="aws cloud practitioner cert").click()
    page.get_by_role("img", name="Harvard Logo").click()
    page.get_by_role("img", name="ucsd logo").click()
    page.get_by_role("link", name="Projects").click()
    page.get_by_role(
        "heading",
        name="I made this page in React and am hosting it on S3. It goes through AWS Route 53/Cloudfront with a TLS cert. I have setup a serverless backend api-gateway lambda deployed using Terraform to show proof of general backend knowledge. It checks if a word is a palindrome, i.e. if it’s the same forward and reverse. Try it out!",
    ).click()
    page.get_by_role(
        "heading",
        name="This is a very old project that utilized React and Django with jwts to make an app that keeps track of manufacturing scrap and displays cost data to the user. I’ve learned a lot since making this, but I think it still holds merit.",
    ).click()
    page.locator("div").filter(has_text="Call Lambda").nth(3).click()
    page.get_by_placeholder("check if word is palindrome").click()
    page.get_by_placeholder("check if word is palindrome").fill("test")
    page.get_by_role("button", name="Call Lambda").click()
    page.get_by_text("test is NOT a palindrome 😔").click()
    page.get_by_placeholder("check if word is palindrome").click()
    page.get_by_placeholder("check if word is palindrome").fill("testset")
    page.wait_for_timeout(550)
    page.get_by_role("button", name="Call Lambda").click()
    page.get_by_text("testset is a palindrome! ").click(timeout=1500)

    # ---------------------
    context.close()
    browser.close()


def test_playwrite_main():
    with sync_playwright() as playwright:
        run_recording_of_main_UI_items(playwright)
