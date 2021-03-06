function chooseRandomPrompt() {

    randomIndex = Math.floor(Math.random() * propmt_list.length)
    document.getElementById("main_prompt").innerHTML = propmt_list[randomIndex];
  }

 propmt_list = [
  "When do I feel most helpful to others?",
  "What do I keep doing that keeps hurting? Why do I keep repeating this behavior?",
  "What do I need to get off my chest?",
  "What did the people who raised me teach me about love? What lessons do I want to keep? What do I want to change?",
  "Are any of my insecurities hurting anyone else by accident?",
  "How would I describe my relationship with myself?",
  "What do I need help with currently? Who can help me? How can I help myself?",
  "What am I putting off that feels important?",
  "Give myself a compliment.",
  "What's the most exciting improvement I've been seeing in myself recently?",
  "Is there anyone who has changed your life but doesn't know it?",
  "When was the last time you surprised yourself?",
  "Dear younger self: ______.",
  "What is something you've learned about yourself this week?",
  "I want to thank myself for ____.",
  "What is the worst assumption someone has made about you?",
  "Are you lying to yourself about anything?",
  "What's your favorite part of yourself that isn't something physical?",
  "What belief about yourself no longer serves you?",
  "What do you need to forgive yourself for?",
  "What's my favorite song at the moment? Why?",
  "What doubts do I have about myself right now? (Replace that thought with an affirmation and repeat it daily for this week.",
  "What have I accomplished recently that would have shocked me a year ago?",
  "What's the best gift I gave give myself in this chapter of my life?",
  "What's non-negotiable in my life?",
  "What's one small step I can take today towards a goal that feels out of reach?",
  "What have I tolerated in the past that I no longer have space for?",
  "What have a outgrown recently? What am I growing into?",
  "What have I always accepted as true that turned out to be false?",
  "What can I do to be kinder to myself today/tomorrow?",
  "What are 3 things I love most about myself today?",
  "Whose life seems most fulfilling to me? Why do I think that?",
  "What insecurities are holding me back the most?",
  "What do I dislike that most people love? What do I love that most people dislike?",
  "When do I feel most productive? Why? Where am I?",
  "When do I feel most me?",
  "What have I been sensitive to lately?",
  "Who do I feel most myself around? Why?",
  "What's been your happiest memory this past year?",
  "Has a stranger ever changed your life?",
  "What's your first loves name and the reason you fell in love with them?",
  "What's the worst pain you have ever been in that wasn't physical?",
  "Are you missing anyone right now? Do you think they miss you too?",
  "What's the most unexplainable thing that happened to you?",
  "Describe your perfect day!",
  "What dating advice would you give your younger self?",
  "How old do you feel emotionally?",
  "What do I need to hear right now?",
  "I know I'm in love when _____________.",
  "How did you get over your first love?",
  "When was the last time you felt lucky to be you?",
  "What do you need right now, more than anything?"
  ]
