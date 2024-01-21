import './App.css';
import photo from './rydkin_vitali_photo.jpg';

function App() {
  const skills = 'JavaScript TypeScript HTML CSS SASS React Codewars Github Figma Webpack Jira Commercetools'
  const skillsElements = skills.split(' ')
      .map( element => <span className={'skill'}>{element + " "}</span>)

  return (
      <div className="App">
        <div className={'headerInfo'}>
          <img src={photo} className={'imageProfile'} alt={'photo'}/>
          <div className={'rightBlock'}>
            <div className={'line'}></div>
            <h1>Vitali Rydkin</h1>
            <div>Belarus, Minsk 21.08.1987</div>
            <p>
              Tel.: 375 29 7364685<br/>
              Email: vital.rydkin@gmail.com<br/>
              Telegram: @Vitali23<br/>
              Linkedin: vitali007<br/>
              Codewars: rsschool_4ef1beb1852b19cc<br/>
              Github: vitali007tut<br/>
            </p>
          </div>
        </div>
        <div className={'about'}>
          <div className={'title'}>About</div>
          <div className={'description rightBlock'}>
            <div className={'line'}></div>
            Highly motivated and detail-oriented front-end developer. With a strong foundation in JavaScript, TypeScript, HTML and CSS, I excel at translating design concepts into fully functional websites and web applications. </div>
        </div>
        <div className={'skills'}>
          <div className={'title'}>Skills</div>
          <div className={'description rightBlock'}>
            <div className={'line'}></div>
            <div className={'skillContainer'}>{skillsElements}</div>
          </div>
        </div>
        <div className={'projects'}>
          <div className={'title'}>Projects</div>
          <div className={'description rightBlock'}>
            <div className={'line'}></div>
            https://vitali007tut.github.io/JSRS23Q1/minesweeper/<br/>
            https://vitali007tut.github.io/JSRS23Q1/rs-css/<br/>
            https://vitali007tut.github.io/JSRS23Q1/shelter/<br/>
            https://vitali007tut.github.io/JSRS23Q0/<br/>
          </div>
        </div>

        <div className={'education'}>
          <div className={'title'}>Education</div>
          <div className={'description rightBlock'}>
            <div className={'line'}></div>
            <strong>The Rolling Scopes School</strong><br/>
            December 2022 - PRESENT, Online<br/>
            <strong>StreamLine English courses</strong><br/>
            2021 - 2022<br/>
            <strong>University BNTU / Degree</strong><br/>
            2005 - 2010, Minsk<br/>
            <strong>Self-education</strong><br/>
            2020 - PRESENT<br/>
          </div>
        </div>
        <div className={'languages'}>
          <div className={'title'}>Languages</div>
          <div className={'description rightBlock'}>
            <div className={'line'}></div>
            <b>Russian</b> – native<br/>
            <b>English</b> – B1<br/>
          </div>
        </div>
      </div>
  );
}

export default App;
