# project-01

API endpoints:
/api/city
/api/city/id/report

Description:
  Main page
    1. report the locations of potholes in their city by nearest cross-streets.
    2. find ciy via dropdown manu and redirect to that city's page.  
    3. Create new city by clicking on the 'add city' button and filling in the text fields
    4. 'add city' adds the city to the api as well as the dropdown menu
  
  Individual City Pages
    1. generates a list of all the potholes in the city 
    2. menu to add new potholes to the list.
    3. Each pothole lists:
      1. the two nearest cross streets
      2. if the pothole has been fixed, it states so.  
      3. button that allows one to delete a pothole from the client side.
      
      

Planned Features:
    1. fix the update button so that it doesnt break the other functions
    2. create a voting system that allows people to vote on whether a pothole is actually fixed or not.
    3. add images to the report schema: first urls, then allow people to upload images upon creation of a pothole report
    

Bugs:
1. there is an update feature, but the modal containing the fields currently breaks the list and only displays one pothole per city at a time.
2. there is a page that lists all of the cities that is functionally useless.
