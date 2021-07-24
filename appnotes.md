IMPLEMENT ACTIVITY 26 FUNCTIONALITY INTO THIS PROJECT

Website is actually rendering. Will be able to test from back end. Start trying to link ItemSmall to a Navbar category?
frontend: create functionality for itemsmall (query item from db)
create map (will the category work for a parameter to correctly map) and jsx on itemsearchpage, onclick function to render the smallitems/bigitems
backend: Will we need a seperate query for each category?
seed database with dummy items 2
create typedef for query item
create resolver for query item
create query in utils for query item
rename itemsmall to item thumb -item big too..?

ItemBig - Renders the item that is clicked on from Item Search, Also renders the item in the cart, functionality started, is the itemtoSave selected correctly? does saved item need to be saved to state?
Item Small - functionality not started, similiar query to item big with different JSX to only show img and itemname, no save mutation
LoginForm - Renders to Login page, functionality started
SavedItems - Do we need to have this for the cart or can we render ItemBig?
SignupForm - Renders to Login page, conditional rendering? functionality started

HomePage - notes on written paper
Userpage.js - renders the Users cart, need delete functionality for saved ItemBig (or savedItems) components
ItemSearchPage - need to map over itemsmall components that have a certain category from the schema
LoginPage - will render the login and signupforms, possibly conditionally
UserPage - will render the items saved to the cart, mapping over item big or saved item based on an id for the user - purchase capability will require a new page

HOW TO CLICK ON A TAG FOR ITEM SMALL AND HAVE IT ROUTE TO THAT ITEM BIG
SAME WITH ITEM SMALL, TO USE A CATEGORY AS A PARAMETER FOR THE QUERY
