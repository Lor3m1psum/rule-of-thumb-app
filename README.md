# Rule of Thumb App

The app <b>Rule of Thumb</b> tm. tracks the sentiment of their users on trending and controversial people from different fields, including politics, business, media and entertainment, etc. The website has the following requirement: they need to present their users with an easy way to share their opinion on each presented celebrity, using votes (thumbs up and down), and display the results to the user while the poll is open. These features should be available to all users, regardless of where they're accessing the website from, whether it's a smartphone, a tablet or a desktop computer.
___   

#### App design Requirements:
    https://github.com/zemoga/ui-test   


## Acceptance criteria:  
🔵 Mobile prototype. 
🔵 Tablet prototype. 
🔵 Desktop prototype
🔵 Mobile version only shows a horizontal scrolling list of cards.
🔵 in Tablet/Desktop version, user can switch LIST/GRID view.  
  > If list view selected, then cards will be stacked vertically.  
  > If grid view selected, then cards are positioned as grid elements.  

✅ Each card contains a functional gauge bar showing votes as percentage.  
✅ Each card contains three buttons, "thumbs UP", "thumbs DOWN" and "Vote now".  
✅ Pressing "thumbs UP" or "thumbs DOWN" will highlight its border in white color, and will enable "Vote now" button.  
✅ if "Vote now" button is pressed, then the vote (and its type ,positive or negative) will be posted.  
✅ after pressing "Vote now" button, an eyebrow text will show "Thank you for your vote" and will enable the "Vote again" button.  
✅ The gauge bar will reflect changes on positive or negative votes as soon as the vote is sent.  
✅ if "Vote again" button is pressed, then will enable voting buttons again.  
✅ all votes persists with local storage implementation.  
✅ if user voted or enable voting again, those changes will persist if refreshing the browser. 

_notes regarding differences with figma designs:
I personally prefer how it looks font-weight in 300 because it preserve better the figma design card looks
also the width of the card in mobile was selected to be 400px instead of 300px as figma shows_

#### Steps to run in your local:

1. execute command <code>npm install</code>
2. execute command <code>npm start</code>


#### dev-dependencies:
- node -v ^16.19", port as the vite port default, which is localhost:5173

made by Lor3m1psum : https://github.com/Lor3m1psum
