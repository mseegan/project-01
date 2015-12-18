# project-01

API endpoints:
/api/city
/api/city/id/report

Description:
  Main page
    -report the locations of potholes in their city by nearest cross-streets.
    -find ciy via dropdown manu and redirect to that city's page.  
    -Create new city by clicking on the 'add city' button and filling in the text fields
    -'add city' adds the city to the api as well as the dropdown menu
  
  Individual City Pages
    -generates a list of all the potholes in the city 
    -menu to add new potholes to the list.
    -Each pothole lists:
      -the two nearest cross streets
      -if the pothole has been fixed, it states so.  
      -button that allows one to delete a pothole from the client side.
      
      

Planned Features:
    -fix the update button so that it doesnt break the other functions
    -create a voting system that allows people to vote on whether a pothole is actually fixed or not.
    -add images to the report schema: first urls, then allow people to upload images upon creation of a pothole report
    -

Bugs:
there is an update feature, but the modal containing the fields currently breaks the list and only displays one pothole per city at a time.
there is a page that lists all of the cities that is functionally useless.
