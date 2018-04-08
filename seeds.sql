use diamondlist;

INSERT INTO users (email, password, fullName, phoneNumber, address, city, state, zipcode, createdAt, updatedAt) 
VALUES ("keira.mclean@yahoo.com","1234","Keira McLean","6038718479","7 Clarkdale Road", "Kennebunk", "ME", "04043","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("noahtullysanderson@gmail.com","1234","Noah Sanderson","6035551212","43 McNabb Court", "Portsmouth", "NH", "03801","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("anithasunil2008@gmail.com","1234","Anitharaj Sridharan","6039995555","240 Elwyn Road", "Portsmouth", "NH", "03801","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("anthonyknight023@gmail.com","1234","Anthony Knight","6032221212","74 Skyview Drive", "Greenland", "NH", "03840","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("namefirst.namelast@yahoo.com","1234","My Name","6035559999","35 Mooring Drive", "Hampton", "NH", "03842","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("keira.nevers@gmail.com","1234","Keira Nevers","6039037351","4196 Province Lake Road", "Wakefield", "NH", "03830","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("david.nevers907@gmail.com","1234","David Nevers","9079828262","4196 Province Lake Road", "Wakefield", "NH", "08380","2018-04-07 15:29:45","2018-04-07 15:29:45"),
("dbarbarits@yahoo.com","1234","Don Barbarits","6036618306","826 South Street", "Portsmouth", "NH", "03801","2018-04-07 15:29:45","2018-04-07 15:29:45");

INSERT INTO services (category, businessName, businessService, costOfService, createdAt, updatedAt, UserID)
VALUES
("Automotive","Gary's Auto Salvage","Tow your car away for Cash!  Eliminate the stress of getting your wrecked car out of your driveway.  I'll come get it and give you CASH!",
"10","2018-04-07 15:29:45","2018-04-07 15:29:45","7"),
("Labor","David's Carpentry","I will gladly provide your Roofing needs, Replacement Doors, Small carpentry jobs and finish work",
"30","2018-04-07 15:29:45","2018-04-07 15:29:45","7"),
("Labor","David and Crew","We provide any outdoor landscaping, mowing, small tree removal and any other outdoor labor you might be in need of!",
"30","2018-04-07 15:29:45","2018-04-07 15:29:45","7"),
("Lessons","My Pottery Class","I offer lessons in Pottery making.  Design the perfect gift for that special person.  Learn a new craft!",
"25","2018-04-07 15:29:45","2018-04-07 15:29:45","3"),
("Lessons","Gramma's Piano","Providing all ages beginner to advanced piano lessons.  In my house, a baby grand piano awaits your magic fingers",
"35","2018-04-07 15:29:45","2018-04-07 15:29:45","7"),
("Pets","Pet Sitting","We are available to watch your pet while you're away.  Anything from drop in's during the day to let your pet out, clean a litter box or cage, and even a little loving and petting to make your pet feel less stressed.",
"15","2018-04-07 15:29:45","2018-04-07 15:29:45","6"),
("Pets","Rescue Land","Fostering rescued animals for adoption. Fill out an applicaiton to become a foster or a forever Pet Parent!",
"300","2018-04-07 15:29:45","2018-04-07 15:29:45","1"),
("Beauty","Uptown Curl","Uptown Curl is a full-service beauty salon. Maine's First Green Circle Salon. Our Team will be diverting 95% of salon waste. Specializing in custom color, hair & eyelash extensions, bridal parties, waxing, and more!",
"50","2018-04-07 15:29:45","2018-04-07 15:29:45","1");