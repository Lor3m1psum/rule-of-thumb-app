# Rule of Thumb App

The app <b>Rule of Thumb</b> tm. tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.
___   

#### App design Requirements:
    https://github.com/zemoga/ui-test   


## Acceptance criteria:  
✅ Mobile prototype. 
✅ Tablet prototype. 
✅ Desktop prototype
✅ Mobile version only shows a horizontal scrolling list of cards.
✅ in Tablet/Desktop version, user can switch LIST/GRID view.  
  > If list view selected, then cards will be stacked vertically.  
  > If grid view selected, then cards are positioned as grid elements.  

✅ Each card contains a functional gauge bar showing votes as percentage.  
✅ Each card contains three buttons, "thumbs UP", "thumbs DOWN", "Vote now".  
✅ Pressing "thumbs UP" or "thumbs DOWN" will highlight its border in white color, and will enable "Vote now" button.  
✅ if "Vote now" button is pressed, then the vote will be posted.  
✅ after pressing "Vote now" button, an eyebrow text will show "Thank you for your vote", with an enabled "Vote again" button.  
✅ The gauge bar will reflect changes after a vote is sent.  
✅ if "Vote again" button is pressed, then will enable voting buttons again.  
✅ all posted button are persistent (localstorage).  
✅ if user voted or enable voting again, those changes will persist, even after browser is refreshed.

#### Steps to run in your local:

1. execute command <code>npm install</code>
2. execute command <code>npm start</code>


#### dev-dependencies:
- node -v ^16.19, port as the vite port default, which is http://localhost:5173/