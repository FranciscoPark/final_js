const quotes=
[
{
    quote: "Nothing can substitute for just plain hard work. I had to put in the time to get back. And it was a grind.",
    author: "Andre Agassi"
},
{

    quote:"One of the things it taught me is that every ball that comes to me, I have to make a decision.",
    author:"Billie Jean King"
},
{
    quote:"Tennis is, more than most sports, a sport of the mind.",
    author: "Rafael Nadal"
},
{
    quote:"Tennis is a tough sport – there are no draws.",
    author: "Roger Federer"
},
{
    quote:
    "I just try to play tennis and don't find excuses. You know, I just lost because I lost, not because my arm was sore.",
    
    author: "Goran Ivanisevic"
},
{
    quote:
    "If you don't lose, you cannot enjoy the victories. So I have to accept both things.",
   
    author: "Rafael Nadal"
},
{
    quote:"I'll let the racket do the talking.",
    author: "John McEnroe"
},
{
    quote:
    "I play each point like my life depends on it.",
    
    author: "Rafael Nadal"
},
{
    quote:"You'll hear a lot of applause in your life, fellas, but none will mean more to you than that applause from your peers. I hope each of you hears that at the end.",

    author: "Andre Agassi"

},
{
    quote:"When I was serving for the match, there was a sense of how big a moment that is in British tennis history. It's great to have finally done it.",

    author: "Andy Murray"
},
{
    quote:"I don't think, that you can ever get your game to perfection, you know. Only if you're Federer.",
    author: "Novak Djokovic"
},
{
    quote:"The fifth set is not about tennis, it's about nerves.",
    author: "Boris Becker"
},
{
    quote:"The ball is round, the game is long.",
    author: "Bjorn Borg"
},
{
    quote:"It's shocking how little there is to do with tennis when you're just thinking about nothing except winning every point.",   
    author: "Andre Agassi"
}
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;