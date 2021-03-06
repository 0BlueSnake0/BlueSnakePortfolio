# <a href="https://bluesnakeengineer.ru" style="text-decoration:none;color:black;">Welcome to my portfolio project!</a>
This is a one-page portfolio site written in Python using the Django framework. The project allows you to show your resume in full. Moreover, you can create multiple profiles and then activate one of them to show on the main page. 
All you have to do is fill out some forms in the admin panel for your profile, and then it all comes together in a good looking and presentable portfolio that will contain all the main blocks - contacts, work experience, and your projects.

# Usage
<div style="width:100%;display:flex;" align="center">
<img style="width:60%;display:block;position:relative;" src="https://user-images.githubusercontent.com/70055801/178931917-f94e2cfe-a6ba-48c9-94d5-9104295b1c6d.png">
<img style="width:30%;display:block;position:relative;margin:100px;" src="https://user-images.githubusercontent.com/70055801/180618708-e7aec2cb-dbd4-4bf6-812c-6f469e95f026.png">   

</div> 
You can visit my website at https://bluesnakeengineer.ru to know more about me!

# Installation
# Clone repository
```
git clone https://github.com/BlueSnakePortfolio
``` 
# Install requirements 
``` 
cd BlueSnakePortfolio
pip install -r requirements.txt
```

# Add SECRET_KEY environment variable to .env file 
```
cd ./bluesnake/bluesnake
touch .env
nano .env
``` 
Define your secret key here:
```
SECRET_KEY = "your_secret_key"
``` 
# Edit settings.py file
```
nano settings.py
``` 
Put your hostname to ALLOWED_HOSTS. Also you can add 127.0.0.1 to run site on local host. 
```
ALLOWED_HOSTS = [ 
    'your_hostname.com',
    '127.0.0.1'             
]
``` 



# Apply migrations
```
cd ..
python3 manage.py migrate
```

# Create superuser
``` 
python3 manage.py createsuperuser
```
Enter your username, password and email
```  
Username (leave blank to use 'user23523'): 
Email address: user23523@gmail.com
Password: 
Password (again): 
Superuser created successfully.

```

# Run on local host
``` 
python3 manage.py runserver --insecure
```

# Go to 127.0.0.1:800/admin in your browser and login as admin 
![image](https://user-images.githubusercontent.com/70055801/180741849-98287c49-345a-4594-81e9-490d26b11a3b.png)

# Now you can go to different sections in admin panel and create/edit your resume
![image](https://user-images.githubusercontent.com/70055801/178949742-502f3072-26eb-4d2e-bb11-41452af65fdd.png) 


# Technologies
- Python (Django)
- JS, HTML, CSS

# Project status
I'm still working on this project and making small changes from time to time.
