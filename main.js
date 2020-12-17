/*
    Practical/Problem Solving:

            
    Light hearted:
        - press to change chrome themes
        - press the extension and it inverts of the colors - dark mode

    Why would anyone make this?
        - beer me: click on extension takes u to drizzly
            - one step beer ordering
            can apply to anything
                - beer or desserts
                - The Office reference
        - instant visualizer - relates to nothing
        - "are you on facebook?"

        
    something interesting/cool/relevance 

    execution

    how technically challenging was it

    presentation itself


    def:
    - image that you have that u can move on any chrome page
    - google calendar prompt for zoom room: doable, fun
    - cached store openings for stores u frequent: doable, wouldnt be not fun, techinically okay difficulty
    - aggregate menu prices - get lowest prices for w/e u wanna eat
    - "get to the point" text to speech for blind ppl
    
    i like it:
    - build your own cursor
    - bypass subscriptions: not sure if doable, could be fun, def tech chall
    - 404: doable and fun
    - all the sites that are tracking you
    - input what teams you like, if there's a game on, prompts you and sends to you every illegal streaming
    options



    criteria for ranking:
        - is it doable
        - would it be fun
        - how does it fit within competition criteria

*/

/*
    Purpose: Designed to give you an alert with the actual zoom link so that you don't have to rummage through your google tabs to find calendar
    and click on the link on the calendar page, which happens to be font size 3

    Questions/Possible Concerns:
        - alert popping up independent of any of the tabs
        - navigating google calendar API
        - figuring out how to use it for our extension
    
    Strategy:

        Design: 
        - we want some sort of alert box to pop open with the zoom room and possibly the time that it starts
        

        Functionality:
        - set up basic extension

        - parse through info 
            - finding a way to see if a zoom meeting exists + the time and day of said event
                
                - user clicks "on" button for extension and the extension triggers function to send ajax request for that calendar day

                    - function checks current date, checks it with calendar date

                    - fetch ajax request and send it somewhere

                    - gets a return of API/data

                    - checks cache if it's already filled

                - get zoom meeting link and store it in some cache/storage w/ time and date
                - only look for maybe that day

                    - if not filled, fills it with relevant data for all zoom meetings and their dates

                    - on some time, checks current time every x/ mins/seconds/whatever and compares to cached data

                    - while intervaling, will check for new zoom meetings and if new one is found, adds new to cache
                        - will also check current time and match it with cached time
                            - if cached time within x mins, sends out an alert

    set up our notification "box"
        
    
    Stretch:
        - alert outside the browser itself
*/
