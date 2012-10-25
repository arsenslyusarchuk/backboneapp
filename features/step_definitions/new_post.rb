Given /^site entered$/ do
  visit ("/posts")
end

Then /^I should see "(.*?)"$/ do |arg1|
  page.find('body').should have_content(arg1)
end

When /^I click button "(.*?)"$/ do |arg1|
 click_link arg1 
end

And /^fill in all the inputs$/ do
  fill_in 'title', :with => 'This is title'
  fill_in 'description', :with => 'This is description'
  check('checked')
end



When /^I click "(.*?)"$/ do |arg1|
  click_button arg1
end  



Then /^I should see post created$/ do
	page.find('body').should have_content('This is title')
end

When /^change post title$/ do
  
  fill_in "title", :with => "Updated title"
  click_button "Update Post"

end

Then /^I should see title updated$/ do
  page.find('body').should have_content('Updated title')
end




