# Merry Cacti <img src="https://github.com/Apurva-tech/files/blob/master/Bot-Avatar.jpg" width="100" height = "100">


### Inspiration ⚡

<strong>Mental health is a stigma in the so called modern society of ours, where people cannot talk about their problems and grievances openly and express themselves. Around 6.7 percent of the U.S. adult population suffer from one or the other mental disease which is often neglected. There are hundreds and thousands of people out there who require attention and need someone to support them. Therefore, we present to you Merry Cacti, your companion which promises comfort and compasion. </strong>

<p  align="center"><img height= "400" width = "600" src = "https://github.com/Apurva-tech/files/blob/master/Landling.gif"></p>

### What it does 🤖

We created this application to help the users suffering from mental health illness and comfort them. Merry Cacti is a <strong>reddit bot</strong> which finds the user's post which implies depressive and self destructive sentiments and replies happy thoughts and redirects them to our website where we provide a platform to help such users express themselves anonymously and help each other using a subreddit. 

We at first extracted the data to train our model by using the reddit json file and then process the data to create a final csv file. We used nltk and spacy to pre-process the Reddit post text data and analyse if the text is suicidal or depressive, and comment on the post accordingly. We created a website where people can view our bot replies on Reddit and chat with our bot integrated into the website. 

### How We built it 💡

1. The website UI/UX was designed using Figma. 
2. We used Python to create the bot. We extracted the data from a subreddit json file and processed the required data to create the final file.  
3. For training our model we used scikit-learn TfiedfVectorizer which gave the best model accuracy of 95%, to create predictions if the post depicts suicdal or depressed behaviour.


### Challenges we ran into 🧠

- Extracting the data for training the model.
- Pre-processing the model 
- Creating a chat-bot for the website and integrating it.
- Using reddit API json file to create embeds of the replies and posts for the website.

### Accomplishments that we are proud of 😌

We created a fully functional bot which can emphathize with human being and comfort them. We are very proud to share that some comments did help our users and made them feel better themselves. We integrated a chatbot to our website which can help users to talk and make them feel loved and supported. <strong>One of the bot's comment received the Gold awards, Helpful Award, Wholesome Award and Silver Award.</strong>

|<img src="https://github.com/Apurva-tech/files/blob/master/GoldAward.jpg" width="425"/> | <img src="https://github.com/Apurva-tech/files/blob/master/Helpfulaward.jpg" width="425"/> |
|---|---|
|<img src="https://github.com/Apurva-tech/files/blob/master/Wholesomeaward.jpg" width="425"/> | <img src="https://github.com/Apurva-tech/files/blob/master/SilverAward.jpg" width="425"/> |

### What we learned 🤩

We learned basic structure of natural language processing using nltk and spaCy using Python. And creating and integrating a chatbot in our website. 

### What's next for Merry Cacti 📈

#### ➡ Creating a functional forum

So that the user can communicate anonymously and help each other. 

#### ➡ Improve the NLP model. 

The accuracy of the NLP model can be increased in the future.

#### ➡ Improving the functionality of our chat-bot

Include more functionality like increasing the accuracy of the bot-replies. 

### Help File 💻

- [x] Clone the repository to your local directory
 - `https://github.com/cryptus-neoxys/merry-cacti.git`
 
- [x] Create a reddit developer account and generate API client ID and client secret key 
 - Add your keys to the script merry_cacti.py
 
```python
  userAgent = ''
  cID = ''
  cSC= ''
  userN = ''
  userP =''
```

- [x] Now create a virtualenv for your local directory
 - `pip install virtualenv`
 - `virtualenv env`
 - `env\Scripts\activate`
 - `python merry_cacti.py`

- [x] Keep track of rate limit, check your bot account to see the bot in Action!!


### Built With ⚙

#### The Website

- [x] NEXTjs / ReactJS
- [x] Styled Components
- [x] Material UI
- [x] HTML
- [x] JavaScript
- [x] CSS
- [x] Deployed with Vercel

#### The Reddit Bot
- [x] Python
  - NLTK
  - Numpy
  - Pandas
  - Seaborn
  - SpaCy
  - Scikit-learn
  - PRAW


### Try it out 👇🏽

- 🌵 [Reddit Profile](https://www.reddit.com/user/Merry-Cacti)
- 🕸 [The Website](https://merry-cacti.vercel.app/)

### Cheers to the team 🥂

- [Apurva Sharma](https://github.com/Apurva-tech)
- [Aniket Singh Rawat](https://github.com/dikwickley)
- [Dev Sharma](https://github.com/cryptus-neoxys)
- [Vinayak gupta](https://github.com/gvinayakgupta)
