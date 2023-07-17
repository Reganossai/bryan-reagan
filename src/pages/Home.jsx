import React from "react";
import Navbar from "../components/Navbar";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import dom from "../assets/dom.png";
import git from "../assets/git.png";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="body-content">
        <h6>CHAPTER ONE</h6>

        <h1>
          Firstly, prior knowledge of the tools and processes involved in web
          development is required.
        </h1>
        <h2>Tools</h2>
        <p> Here's a walk through of the tools needed.</p>
        <p>
          <b> An editor</b> which compiles the source code and displays it on
          the browser . There are a lot of <b>editors</b> used in web
          development. Some of which include Vscode, sublime text etc. We'll be
          making use of Vscode for this tutorial.
        </p>

        <a href="https://code.visualstudio.com/download" alt="vs-code-download">
          Here's a link to download Vscode
        </a>
        <p>
          <b>A browser</b>. There are a lot of <b>browsers</b> as you might
          know. We'll make use of <b>Google Chrome</b> for this tutorial.
        </p>
        <a href="https://www.google.com/chrome/">
          Here's a link to download Google Chrome
        </a>
        <p>Once we have the steps above completed, we can get started.</p>

        <h2>Processes</h2>
        <h3>Learn Html</h3>
        <p>
          <span>
            <b>Html</b>
          </span> stands for <span> <b>"Hyper Text Markup Language"</b></span>
          .
        </p>
        <p>
          Just like they say, a cell is the smallest unit of life, we can also
          use the persepective in terms of looking at html.
        </p>
        <p> <span><b>Html</b> </span>
          is a standardized language for tagging text files to achieve font,
          colour, graphic, and hyperlink effects on a web page in a browser.
        </p>
        <p>
          Just the same way we as human beings have languages we understand, so
          also does the browser have basic languages that it understands. Html
          happens to be one of them. Others are javascript and Css(Cascading
          Style Sheet).We'll talk about them later in this tutorial.
        </p>
        <a href="https://www.w3schools.com/html/html_intro.asp">
          Here's a link to learn html in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in <b>html</b>.
        </p>
        <img src={html} alt="html" />
        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>

        <h3>Learn Css</h3>

        <p><span><b>Css</b> </span> stands for "Cascading Style sheet".</p>
        <p><span> <b>Css is a styling language</b></span> which the browser understands and it is used when adding style to
          whatever is on the browser. There are other supersets of <b>css</b>{" "}
          like scss/sass which are more complex and give more precision to
          designs but all are compiled into pure css finally because it's the
          styling language that the browser understands.
        </p>
        <a href="https://www.w3schools.com/css/css_intro.asp">
          Here's a link to learn css in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in <span> <b>css</b></span>.
        </p>
        <img src={css} alt="css" />

        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>
        <p>
          If you studied and practiced the whole processes in both the html and
          css courses above, you should be able to create your own little cute
          web pages.
        </p>
        <p>
          There's another very important language that the browser understands
          and this makes your website very effective as it's used to do a lot of
          important things. This very important language is called
          <b> javascript </b>. It's quite complex but important
        </p>

        <h3>Learn Javascript</h3>
        <p>
          <span>
            <b>Javascript</b>
          </span> is a dynamic programming language that's used for web development, in
          web applications, for game development, and lots more. It allows you
          to implement dynamic features on web pages that cannot be done with
          only HTML and CSS..
        </p>

        <a href="https://www.w3schools.com/js/js_intro.asp">
          Here's a link to learn javascript in depth
        </a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in{" "}
          <span>
            <b>javascript</b>
          </span>
          .
        </p>
        <img src={javascript} alt="javascriptt" />
        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>

        <h6>CHAPTER TWO</h6>
        <h3>The DOM</h3>
        <p>The <b>DOM</b> defines a standard for accessing documents. The <b>DOM</b> stands for "Document Object Model" and it is a platform and language-neutral interface that allows programs and scripts to dynamically access and update the content, structure, and style of a document.</p>
     
        <a href="https://www.w3schools.com/js/js_htmldom.asp#:~:text=The%20DOM%20defines%20a%20standard,and%20style%20of%20a%20document.%22">
          Here's a link to learn about the DOM and more of what it entails
        </a>

        <p>On the left hand side, there are detailed sub modules to explain what the DOM is all about and its significance.</p>
       <img src={dom} alt="dom"/>

       <h3>Git and Github</h3>
        <p>I'll take you through a scenario. As a programmer, when you're done with your code and it's saved and it's working well on your browser. A situation may arise when you need to make changes to the website through your code and unfortunately your laptop containing your code is faulty or basically you can't get access to that code . You become stuck. This is where <b>github</b> comes in handy. <b>Github</b> is more like a store for your codes and important files you need to keep safe instead of just having them on your computer which can get lost when the computer becomes faulty. Keeping your code in <b>github</b> ensures that you have a backup remote store in cases you might need to have access to that code later in the future . </p>
        <p> With that being said, you might be wondering how you get your codes to <b>github</b>. This is done using <b>git</b> commands.</p>
        <p><b>Git</b> is a popular version control system. It was created by Linus Torvalds in 2005, and has been maintained by Junio Hamano since then.</p>
        <p> <b>Git</b> and <b>GitHub</b> are two different entities. <b>Git</b> is a version control system that allows developers to track changes in their code. <b>GitHub</b> is a web-based hosting service for <b>git</b> repositories. In simple terms, you can use <b>git</b> without <b>Github</b>, but you cannot use <b>GitHub</b> without <b>Git</b>.</p>
        <a href="https://www.w3schools.com/git/default.asp?remote=github">Here's a link to study more on git and github</a>
        <p>
          On the left hand side, there are detailed sub modules to help you gain
          the knowledge you require in <b>git</b> and <b>github</b> and how to use <b>git</b> commands to send your code to your <b>github</b> repositories or storage.
        </p>
        <img src={git} alt="git"/>
        <p>
          <b>
            Please do not skip any of the sub modules. Follow them one after one
            in that order.
          </b>
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
