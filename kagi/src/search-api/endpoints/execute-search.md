# Execute Search

## `GET /search`

> This is a **PAID** endpoint.

Runs a search.

Returns an array of [Search Objects](../objects.md#search-object).


## Query Parameters

Field     | Type                        | Description
----------|-----------------------------|-----------
q         | string                      | query
limit     | int                         | limit number of [Search Result](../objects.md#search-result) items

## Examples

<details>
<summary>Request for "steve jobs" query</summary>

```shell
curl -v -H "Authorization: Bot $TOKEN" https://kagi.com/api/v0/search\?q=steve+jobs
```

```json
{
  "meta": {
    "id": "f82bee15-ae0b-4b32-9a9e-05490fe3a8e4",
    "node": "us-east",
    "ms": 600
  },
  "data": [
    {
      "t": 0,
      "rank": 1,
      "url": "https://en.wikipedia.org/wiki/Steve_Jobs",
      "snippet": "<b>Steve Jobs</b>. Steven Paul <b>Jobs</b> (February 24, 1955 – October 5, 2011) was an American entrepreneur, industrial designer, business magnate, media proprietor, and investor. He was the co-founder, chairman, and CEO of Apple; the chairman and majority shareholder of Pixar; a member of The Walt Disney Company &#39;s board of directors following its ...",
      "thumbnail": {
        "height": "221",
        "width": "228",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHRMgCYcGVIjA7CgQQtAXfhx2Y8mqTara_FXG1c46a9J6Xp9oZ2IxSBxy_beEmrSLj4YUjAKmanSbb4lqycEHpkZqGAK5Udutm8TGUixnO0whYae6-m-GHN9PlMBlr34zJFR3-sl61vg6CERMa0xPqfg%3D"
      }
    },
    {
      "t": 0,
      "rank": 2,
      "url": "https://en.wikipedia.org/wiki/Steve_Jobs_(film)",
      "snippet": "<b>Steve Jobs</b> is a 2015 biographical drama film directed by Danny Boyle and written by Aaron Sorkin.A British-American co-production, it was adapted from the 2011 biography by Walter Isaacson and interviews conducted by Sorkin, and covers 14 years (1984–1998) in the life of Apple Inc. co-founder <b>Steve Jobs</b>.<b>Jobs</b> is portrayed by Michael Fassbender, with Kate Winslet as Joanna Hoffman and Seth ..."
    },
    {
      "t": 0,
      "rank": 3,
      "url": "https://www.apple.com/stevejobs/",
      "snippet": "Remembering <b>Steve Jobs</b> - Apple. Over a million people from all over the world have shared their memories, thoughts, and feelings about <b>Steve</b>. One thing they all have in common — from personal friends to colleagues to owners of Apple products — is how they’ve been touched by his passion and creativity. You can view some of these messages ..."
    },
    {
      "t": 0,
      "rank": 4,
      "url": "https://www.biography.com/business-figure/steve-jobs",
      "snippet": "<b>Jobs</b>&#39; life was the subject of two films: 2013&#39;s <b>Jobs</b>, starring Ashton Kutcher as <b>Jobs</b>, and 2015&#39;s <b>Steve Jobs</b>, with Michael Fassbender playing the Apple co-founder. Fact Check We strive for ...",
      "thumbnail": {
        "height": "225",
        "width": "225",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHRMgCYcGVIjA7CgQQtAXfhx2Y8mqTara_FXG1c46a9J6xVxPWZ7Wiw4V778hylqy-WJO8lgNBIy78dT-o1lS_MiEaWHNSvfc-PT9MfmoUSn6pQJFuRWAuMnfdH4l3mz55NS0WKJjW5dG4LoOkMqxirQ%3D"
      }
    },
    {
      "t": 0,
      "rank": 5,
      "url": "https://mondaynote.com/remembering-steve-jobs-6f44f3567040",
      "snippet": "Steve was among the greatest of American innovators — brave enough to think differently, bold enough to believe he could change the world, and talented enough to do it. That’s what I’ve always loved about Apple: I remember how happy I felt when I joined the company more than 30 years ago and found it had commissioned a Ray Bradbury poem for the (un..",
      "published": "2022-10-10T02:37:51Z"
    },
    {
      "t": 0,
      "rank": 6,
      "url": "https://en.wikiquote.org/wiki/Steve_Jobs",
      "snippet": "It is best to admit them quickly, and get on with improving your other innovations.Quoted in Steve Jobs, the Journey Is the Reward (1988) by Jeffrey S. Young ISBN 155802378X Life can be much broader once you discover one simple fact: Everything around you that you call life was made up by people that were no smarter than you and you can change it, .."
    },
    {
      "t": 0,
      "rank": 7,
      "url": "https://www.imdb.com/title/tt2080374/",
      "snippet": "<b>Steve Jobs</b> takes us behind the scenes of the digital revolution, to paint a portrait of the man at its epicenter. The story unfolds backstage at three iconic&nbsp;...",
      "thumbnail": {
        "height": "283",
        "width": "178",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHUN0rLADoR7ML9K_Ch885rX8GtSLAAITk3F0ekUFI20IyA35xrHKvvLbZjM2LOq2mvmn6j0SmnyfR8lSNYvFSQQ0XVKRpu-Nr4ljZP8Ikhu-7F0rFN6oKHDxGZrjfSXc5J6MEWMeYkbWAdTD7IhehyE%3D"
      }
    },
    {
      "t": 0,
      "rank": 8,
      "url": "https://www.imdb.com/name/nm0423418/bio",
      "snippet": "Steven Paul <b>Jobs</b> was born on 24 February 1955 in San Francisco, California, to students Abdul Fattah Jandali and Joanne Carole Schieble who were unmarried at the time and gave him up for adoption. He was taken in by a working class couple, Paul and Clara <b>Jobs</b>, and grew up with them in Mountain View, California."
    },
    {
      "t": 0,
      "rank": 9,
      "url": "https://www.imdb.com/name/nm0423418/",
      "snippet": "<b>Steve Jobs</b>, Producer: Toy Story. Steven Paul <b>Jobs</b> was born on 24 February 1955 in San Francisco, California, to students Abdul Fattah Jandali and Joanne Carole Schieble who were unmarried at the time and gave him up for adoption. He was taken in by a working class couple, Paul and Clara <b>Jobs</b>, and grew up with them in Mountain View, California."
    },
    {
      "t": 0,
      "rank": 10,
      "url": "https://www.vintag.es/2022/10/steve-jobs-showing-off-macintosh.html",
      "snippet": "Steve Jobs showing Andy Warhol, Keith Haring and Kenny Scharf how to use a Macintosh computer that Sean Lennon received for his 9th birthday. It was October 9, 1984, and Steve Jobs was going to a nine-year-old’s birthday party. Finally, Jobs put his hand over Warhol’s and steered it along until he’d gotten the hang of it.",
      "published": "2022-10-10T14:10:28Z"
    },
    {
      "t": 0,
      "rank": 11,
      "url": "https://www.britannica.com/biography/Steve-Jobs",
      "snippet": "<b>Steve Jobs</b>, in full Steven Paul <b>Jobs</b>, (born February 24, 1955, San Francisco, California, U.S.—died October 5, 2011, Palo Alto, California), cofounder of Apple Computer, Inc. (now Apple Inc.), and a charismatic pioneer of the personal computer era. <b>Jobs</b> was raised by adoptive parents in Cupertino, California, located in what is now known as Silicon Valley. Though he was interested in ...",
      "published": "2022-10-01T00:00:00Z",
      "thumbnail": {
        "height": "215",
        "width": "235",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCIejcEcQCTt4ajT_Aa79GTOD7WmjrV5DsiBZeNpavs0Eya6cEpBPChtvsDxI4AbIuMJtQoHfXWg3kc7Qf5QYMmYYFUGBX_u9j3TnFPoKiBYc4%3D"
      }
    },
    {
      "t": 0,
      "rank": 12,
      "url": "https://www.britannica.com/summary/Steve-Jobs",
      "snippet": "The first Apple computer, created when <b>Jobs</b> was only 21, changed the public’s idea of a computer from a huge machine for scientific use to a home appliance that could be used by anyone. Apple’s Macintosh computer, which appeared in 1984, introduced a graphical user interface and mouse technology that became the standard for all applications ..."
    },
    {
      "t": 0,
      "rank": 13,
      "url": "https://news.stanford.edu/news/2005/june15/jobs-061505.html",
      "snippet": " This is a prepared text of the Commencement address delivered by <b>Steve Jobs</b>, CEO of Apple Computer and of Pixar Animation Studios,&nbsp;...",
      "published": "2005-06-14T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 14,
      "url": "https://allaboutstevejobs.com/",
      "snippet": "<b>Steve Jobs</b>. This website is a repository of all things <b>Steve Jobs</b> — biography, pictures, videos of his keynotes and demos, quotes, interviews — you name it. It&#39;s also home to a blooming community of admirers of the late Apple founder. Follow us on Facebook, Twitter, YouTube or via RSS - and share it if you like it."
    },
    {
      "t": 0,
      "rank": 15,
      "url": "https://web.archive.org/web/20111007174823/http://netspencer.com/stevejobs/",
      "snippet": "It is best to admit them quickly, and get on with improving your other innovations. Being the richest man in the cemetery doesn’t matter to me … Going to bed at night saying we’ve done something wonderful… that’s what matters to me. I’m convinced that about half of what separates the successful entrepreneurs from the non-successful ones is pure per..",
      "published": "2011-10-07T17:48:23Z"
    },
    {
      "t": 0,
      "rank": 16,
      "url": "https://web.archive.org/web/20110110132953/http://www.theatlanticwire.com/features/view/feature/Steve-Jobs-vs-Fake-Steve-Jobs-2920",
      "snippet": "It&#39;s the most popular fake Steve Jobs account (and there are many), but also one of the most popular parody accounts full stop--causing endless amusement to those who follow it, and those who see constant retweets in their feed of the witty observations of Apple’s &#39;revolutionary&#39; launches.&quot; Fake Steve Jobs , The Atlantic Wire| 3||Quote of the Day: ..",
      "published": "2011-01-10T13:29:53Z"
    },
    {
      "t": 0,
      "rank": 17,
      "url": "https://web.archive.org/web/20100130151009/http://www.dearstevejobs.com/en",
      "snippet": "Soon SVT Play will be available for the iPhone. But if we all pitch in, maybe we can convince Steve to speed things up a little. Watch all the videos people have made to inspire Steve.",
      "published": "2010-01-30T15:10:09Z"
    },
    {
      "t": 0,
      "rank": 18,
      "url": "https://web.archive.org/web/20111009004144/http://blog.phpfog.com/2011/10/06/steve-jobs-memorial-day",
      "snippet": "As soon as you pull your phone up out of the box, it is presented like a plaque, as if to say congratulations on your excellent taste. No edges, no batteries, no ugliness. Steve thought through everything so extensively that it all feels perfectly natural.",
      "published": "2011-10-09T00:41:44Z"
    },
    {
      "t": 0,
      "rank": 19,
      "url": "https://www.forbes.com/profile/steve-jobs/",
      "snippet": "Apple cofounder <b>Steve Jobs</b> finally succumbed to cancer at the age of 56 on October 5th, leaving behind a legacy that changed the computer, music, film and wireless industries."
    },
    {
      "t": 0,
      "rank": 20,
      "url": "http://www.cringely.com/2011/10/steve-jobs-is-dead/",
      "snippet": "I’m sure the phone will appear in a week or two with that appearance in part to encourage the recovery of Apple shares from what is sure to be a short-term decline. Steve Jobs changed the way people live by making popular everything from desktop publishing to digital music, to revolutionary smart phones and computer-animated films. I’ll be writing ..",
      "published": "2011-10-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 21,
      "url": "https://www.amazon.com/Steve-Jobs-Walter-Isaacson/dp/1451648537",
      "snippet": "Walter Isaacson&#39;s “enthralling” (The New Yorker) worldwide bestselling biography of Apple cofounder <b>Steve Jobs</b>. ... Isaacson&#39;s portrait touched millions of&nbsp;...",
      "thumbnail": {
        "height": "278",
        "width": "181",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHRMgCYcGVIjA7CgQQtAXfhx2Y8mqTara_FXG1c46a9J6FcNWTdxwCHMVae3K1QDk7qpabfwDFJ8eo0X-gAnV9HH7zM7K7YzX03oY7SLYLmgwohyyMvD2Zncl088195exPQwfqq6M3ugmZciiKVMBWO8%3D"
      }
    },
    {
      "t": 0,
      "rank": 22,
      "url": "https://www.nytimes.com/2011/10/06/business/steve-jobs-of-apple-dies-at-56.html",
      "snippet": " <b>Steven</b> P. <b>Jobs</b>, the visionary co-founder of Apple who helped usher in the era of personal computers and then led a cultural transformation&nbsp;...",
      "published": "2011-10-12T05:54:55Z",
      "thumbnail": {
        "height": "171",
        "width": "294",
        "url": "/proxy/images?c=_m3km2RjA3G0qleowsZXHZb9NEn0fSsEYIHbKzMDyAFb4nUPIanknmQV_g0rmdCIO3tAIQqupLrzRMRlPkw8S8c18lVRlZJ_Dc9KIfClb1JC38JZTmiJicBj3XjooHHuq7rxRhTGL5H5D_zYMo4OJoO-tglLd3DyXdP5kYtL7kw%3D"
      }
    },
    {
      "t": 0,
      "rank": 23,
      "url": "https://gizmodo.com/meeting-steve-jobs-264661",
      "snippet": "Then Steve got really excited and Happy. Because honestly, I thought the guy would be totally worked up about Jesus&#39;s awesome Photoshops of Steve Jobs. The Eufy RoboVac G30 Hybrid is a great, and cheap, robot vacuum that quietly goes about its business, supports Google Assistant and Alexa, and has limited mapping functionality."
    },
    {
      "t": 0,
      "rank": 24,
      "url": "https://gizmodo.com/steve-jobs-is-dead-5838847",
      "snippet": "Steve Jobs is dead. Steven P. Jobs passed away on October 5th, 2011 after a long struggle with pancreatic cancer. In 100 years, when historians talk about the emergence of the age of intelligent machines, it is Steve Jobs they will hold up as the great exemplar of our era."
    },
    {
      "t": 0,
      "rank": 25,
      "url": "https://lefsetz.com/wordpress/2010/03/23/steve-jobs-response/",
      "snippet": "Steve Jobs’ answer: This is what happens when your MacBook Pro sustains water damage. But instead of worrying about backlash, instead of drinking at the fountain of Tony Hsieh, saying the customer is always right (and I’m now sick of Mr. Zappos, I thought you were running a shoe company, not a cult of personality, now you’ve written a book? And the..",
      "published": "2010-03-23T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 26,
      "url": "https://history-computer.com/steve-jobs-complete-biography/",
      "snippet": "<b>Steve Jobs</b> was an American entrepreneur, computer designer and businessman. He cofounded the Apple company and oversaw the invention of the Apple, iMac and Macintosh computers as well as the iPod, iPhone and iPad. His vision of inexpensive computers designed for regular people helped launch the personal computing industry."
    },
    {
      "t": 0,
      "rank": 27,
      "url": "https://marco.org/2011/10/05/steve-jobs-dies",
      "snippet": "He was so intimately involved in his company and its products (which have become critical parts of my career and hobby life), and he has publicly injected so much vision, personality, and care into our entire industry for so long, that I do feel like I knew him, even though I really didn’t. Steve Jobs inspired generations of people to do great thin..",
      "published": "2011-10-05T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 28,
      "url": "https://history-biography.com/steve-jobs/",
      "snippet": "<b>Steve Jobs</b> Biography. The well-known businessman, computer genius, and even digital entertainment <b>Steve</b> Paul <b>Jobs</b>, better known as <b>Steve Jobs</b>, was born in the city of San Francisco, California, the United States, on February 24, 1955, and died in the city of Palo Alto, California, United States, on October 5, 2011.He is recognized for his role as the co-founder of Apple Inc."
    },
    {
      "t": 0,
      "rank": 29,
      "url": "https://www.azquotes.com/author/7449-Steve_Jobs",
      "snippet": "&quot;<b>Steve Jobs</b>&quot;. Book by Walter Isaacson, www.businessinsider.com. 2011. 16 Copy quote. Innovation is the ability to see change as an opportunity - not a threat. <b>Steve Jobs</b>. Opportunity, Innovation, Threat. 198 Copy quote. Your time is limited, so don&#39;t waste it living someone else&#39;s life. Don&#39;t be trapped by dogma - which is living with the ..."
    },
    {
      "t": 0,
      "rank": 30,
      "url": "https://yro.slashdot.org/story/10/04/30/237238/Steve",
      "snippet": "netcrawler writes &quot;Steve Jobs&#39; open letter on Flash has prompted someone at the Free Software Foundation Europe to ask him about his support of proprietary format H.264 over Theora. That is, they assert they have a monopoly on all digital video compression technology, period, and it is illegal to even attempt to compete with them. Macbooks and iPad.."
    },
    {
      "t": 0,
      "rank": 31,
      "url": "https://9to5mac.com/2022/10/11/steve-jobs-ai/",
      "snippet": "A spooky podcast episode features a <b>Steve Jobs</b> AI being “interviewed” by a Joe Rogan AI – and the effect is mesmerizing, despite the flaws … Podcast.ai describes how the process works ...",
      "published": "2022-10-11T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 32,
      "url": "https://freethoughtblogs.com/pharyngula/2011/10/15/what-killed-steve-jobs/",
      "snippet": "You’ve probably heard the story going around that Steve Jobs’ death was avoidable, if only he hadn’t been so gullible as to steep himself in quack medicine. And subsequently, once he saw that the diet nonsense wasn’t working, he threw himself thoroughly into science-based medicine, getting the best treatment oodles of money could buy, getting the s..",
      "published": "2011-10-15T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 33,
      "url": "https://ei.cs.vt.edu/~history/Jobs.html",
      "snippet": "Jobs and Wozniak had great inspiration in starting a computer company that would produce and sell computers. Over the past seven years of Apple&#39;s creation, Jobs had created a strong productive company with a growth curve like a straight line North with no serious competitors. Jobs feels NextStep is moving slowly but surely to being a software compa.."
    },
    {
      "t": 0,
      "rank": 34,
      "url": "http://www.asymco.com/2011/10/06/steve-jobs-didnt/",
      "snippet": "He gave others the freedom to think about what jobs products are hired to do. He brought engineering processes to works of creativity and the creative process to engineering. Steve Jobs was not a visionary.",
      "published": "2011-10-06T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 35,
      "url": "https://ericjgruber.com/blog/2011/10/thank-you-steve-jobs/",
      "snippet": "Apple says former CEO and founder Steve Jobs has died. I didn’t even use it then – it was pretty much a teacher only device in that classroom – but the school district in my small town had made some investment in Apple’s computers, which began my love affair with that wonderfully thick beige hardware. I wanted my kid-like love back (and the commute..",
      "published": "2011-10-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 36,
      "url": "https://www.metafilter.com/108093/Steve-Jobs-RIP",
      "snippet": "Even if you never bought into Apple&#39;s brand of elitism or kitsch, you can&#39;t deny that Steve Jobs was a legendary visionary, someone who demanded excellence and brought amazing things to life, and created entire industries, product segments, and changed the world for good. posted by jonmc at 4:51 PM on October 5, 2011 [4 favorites] posted by jonmc a.."
    },
    {
      "t": 0,
      "rank": 37,
      "url": "http://swombat.com/2011/10/6/steve-jobs",
      "snippet": "His death at a young, young 56 is a brutal reminder that death takes us all. Even if you’re a multi-billionaire, someone who’s changed the world twice over, loved by many, influential beyond measure, leading one of the world’s most powerful human organisations, living what was presumably a model life from a health perspective, even if you’re someon..",
      "published": "2011-10-06T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 38,
      "url": "https://blog.hubspot.com/sales/steve-jobs-quotes",
      "snippet": "<b>Steve Jobs</b> Quotes on Work. 8. “I’m as proud of many of the things we haven’t done as the things we have done. Innovation is saying no to a thousand things.”. 9. “Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to ..."
    },
    {
      "t": 0,
      "rank": 39,
      "url": "http://www.johndcook.com/blog/2011/11/07/steve-jobs-and-openness/",
      "snippet": "I understand that open windows can mess up the AC, but to say things should be closed because people shouldn’t be presented with the option to screw up is really irritating. I think this says something really sad about Apple/Job’s approach to building things – they are not really interested in empowering people. When you prevent people from opening..",
      "published": "2011-11-07T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 40,
      "url": "http://stevegarfield.com/",
      "snippet": "<b>Steve</b> Garfield is a visionary who looks at disparate things and sees ways to combine them into new and exciting endeavors. Growing up, <b>Steve</b> Garfield was always fascinated by new things, whether it was being intrigued by a sidewalk radio broadcast, learning how to run a childhood vegetable stand and diner, or getting a <b>job</b> sign printing in retail as soon as he was of age."
    },
    {
      "t": 0,
      "rank": 41,
      "url": "https://jasoncrawford.org/working-with-steve-jobs",
      "snippet": "An article by Glenn Reid on “What it’s Really Like Working with Steve Jobs” is worth reading because it counters a false image of how visionary leaders work. Second, great leaders—even those with highly developed intuition and excellent judgment—don’t dominate by sheer force of personality, with their own ideas winning out simply because of who the.."
    },
    {
      "t": 0,
      "rank": 42,
      "url": "http://www.macobserver.com/tmo/article/Larry_Ellison_Discusses_Steve_Jobs_In_Interview/",
      "snippet": "Steve Jobs is my best friend, and I love him dearly, and heis one of the most remarkable people on this planet. You watch him create Apple, then in one of the worst human-resources mistakes in the history of Silicon Valley -- the only thing worse was when the French fired Napoleon -- they fire Steve Jobs and Apple almost completely disintegrates. I.."
    },
    {
      "t": 0,
      "rank": 43,
      "url": "https://blog.metaobject.com/2015/06/steve-jobs-on-swift.html",
      "snippet": "Then you begin to understand the problem and everything becomes terribly complicated. To me this is the perfect visual illustration of the crescendo of special cases that is Swift. The answer to this, according to Steve, is &quot;[..] a few people keep burning the midnight oil and finally understand the underlying principles of the problem and come up w..",
      "published": "2015-06-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 44,
      "url": "http://john.jubjubs.net/2011/10/09/steve-jobs/",
      "snippet": "As a designer, I think it’s impossible to feel anything but pure, unadulterated joy that Steve existed at all. Someone in the audience asked him about Michael Dell’s suggestion in the press a few days previous that Apple should just shut down and return the cash to shareholders, and as I recall, Steve’s response was: “Fuck Michael Dell.” Good god, ..",
      "published": "2011-10-09T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 45,
      "url": "https://www.indeed.com/q-State-l-Plymouth,-MA-jobs.html",
      "snippet": "Page 1 of 10,172 <b>jobs</b>. Human Services Clinician-Up To $5000 Sign-On Bonus Eligible. The Home for Little Wanderers, Inc. 3.4. Plymouth, MA 02360. Full-time. May be licensed as an independent clinician/practitioner in the state of Massachusetts. This position is eligible for an up to $5000 sign-on bonus!"
    },
    {
      "t": 0,
      "rank": 46,
      "url": "https://www.businessinsider.com/2008/7/fake-steve-jobs-r-i-p-",
      "snippet": "Hope you&#39;ve gotten your fill of Dan Lyons&#39; great Secret Diary Of Steve Jobs blog, because it&#39;s going away. Except that this is Fake Steve/Real Dan Lyons, so it&#39;s never exactly cut and dry: As a Bits item notes, Dan is done with the Fake Steve blog, but he has sold the movie rights to Hollywood middlemen Media Rights Capital, and it&#39;s possible that ..",
      "published": "2008-07-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 47,
      "url": "https://www.netflix.com/title/80049358",
      "snippet": "<b>Steve Jobs</b>. 2015 | R | 2h 2m | Movies Based on Real Life. By keying in on three crucial points in his career, this biopic shows the human foibles and visionary fearlessness of the man who made the Mac. Starring: Michael Fassbender, Kate Winslet, Seth Rogen."
    },
    {
      "t": 0,
      "rank": 48,
      "url": "https://www.linkedin.com/jobs/massachusetts-maritime-academy-jobs",
      "snippet": "Today’s top 20 Massachusetts Maritime Academy <b>jobs</b> in United States. Leverage your professional network, and get hired. New Massachusetts Maritime Academy <b>jobs</b> added daily."
    },
    {
      "t": 0,
      "rank": 49,
      "url": "https://daringfireball.net/2012/02/walter_isaacson_steve_jobs",
      "snippet": "What happens then, repeatedly, is that Jobs tells Isaacson something that is true, but Isaacson doesn’t believe it, and he then quotes someone else, like Bill Gates, saying something that is false to refute it, and Isaacson lets that remark stand as fact. What they ended up buying was a guy who most people would not have predicted would be a great ..",
      "published": "2012-02-01T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 50,
      "url": "https://www.muckrock.com/foi/united-states-of-america-10/steve-jobs-fbi-files-847/",
      "snippet": "The FBI has received your Freedom of Information Act/Privacy (FOI/PA) request and it will be forwarded to the Work Process Unit or a Single Station Disclosure Team for review. Thank you for your inquiry regarding the status of your Freedom of Information Act/Privacy (FOI/PA) request. Please be advised that the FBI’s Freedom of Information Act (FOIA.."
    },
    {
      "t": 0,
      "rank": 51,
      "url": "https://www.technologizer.com/2009/05/28/the-patents-of-steve-jobs/",
      "snippet": "Rummaging through Google Patent Search‘s records of patents credited in part to Steve Jobs is an absorbing way to reflect on some of his accomplishments and failures–and maybe even to learn some new things about what makes the man tick.Yes, his name is on the patents for most of the iconic computers, MP3 players, and other gizmos sold by Apple from..",
      "published": "2009-05-28T00:00:00Z"
    },
    {
      "t": 0,
      "rank": 52,
      "url": "https://signalvnoise.com/posts/3021-steve-jobs-changed",
      "snippet": "He changed design. He changed them. He changed us."
    },
    {
      "t": 0,
      "rank": 53,
      "url": "https://freerepublic.com/focus/chat/1422863/posts",
      "snippet": "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work, and the only way to do great work is to love what you do. I was sedated but my wife, who was there, told me that when they viewed the cells under a microscope, the doctor started crying, because it turned out to be a.."
    },
    {
      "t": 1,
      "list": [
        "steve jobs movie",
        "steve jobs death",
        "steve jobs net worth",
        "steve jobs last words",
        "steve jobs daughter",
        "steve jobs kids",
        "steve jobs wife",
        "steve jobs quotes"
      ]
    }
  ]
}
```
</details>
