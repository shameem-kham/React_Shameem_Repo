
import './App.css';
import Card from './Card';
import Footer from './Footer';
function App() {
  return (
    <>
       <nav>
        <div className="logo-container">
            <a href="/" className="logo">
                <h3><b>EDYODA</b></h3>
                <p>Stories</p>
            </a>
            <div className="dropdown">
                <button className="dropdown-text">Explore Categories</button>
                <span><img className="BlogNavigationLink__DropdownArrow__2Uzyk" alt="Dropdown Icon" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAGCAYAAAD37n+BAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAHhJREFUeNpiYGBguAPE/f///2fAh0FqgPguiBEDxC+BeDUQM2NRyAyVewlWCxW0B+L7QHwAiHmRFPNCxUBy9mAxJElVIL4MxBeBWB6KL0LFVOHq0KwXAuJDQHwPikFsIWQ1jFCFcMDIyMgGpFZAuRFA+V/I8gABBgD8EGd4shdx5wAAAABJRU5ErkJggg=="/></span>
                <p className="text-nav">EdYoda is a learning and knowledge <br/> sharing platform for techies</p>
                <div className="btn">
                  <button className=" btn btn-primary" id="nav-button" >Go To Main Website</button>
                  </div>
            </div>
        </div>
    </nav>

    <main>
        <section className="trending-post-container">
            <h1 className="heading">Latest Posts</h1>
            <div className="categories-container">
                <i className="fa fa-filter" id="filter" ></i><img alt="Filter Icon" id="filter-img" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAbFBMVEUAAAA1gME1gME1f8A1gME1gMExd7Q0f8AxeLYzfb00fr80f8Aze7oze7o1gMA0fr4zfLwzfb0zfb0yerg0fb00f8AzfLszfLwzfr40f780f8Azfb00f8A0f8AzfLwzfr81gME0fr4zfLs1gMEkRxAZAAAAI3RSTlMAHOP9f/oT1RAO281OROfhFaSUSkCwnpmOcTfFim9YB/AmGRclE4kAAAF9SURBVGje7dfrboJAEAXgA7jLXRAExRu2vP87No1NJjYpexm3SZv5/vgD9QB7mCwQQggh/rI2YtCwUpUxw7mGhTZdWMoWZlHMC4kjmL0Xv3Al8zHhZCQTbOid159/fRwyWIlK+p2rQcPSvnBLoa+mJ1jrG7+bVdRwcLsvHpoeLuaLepxh4nAd9xvc5F1ityx0Juoyw5EeXZely2DAL/JOw8M+NafQ4TKCl7pxeED28FRtrctbw9uk1u4YHdhW8Jd39LislXcCRzZalEt1OVj0YF76MQPTyVjkQYOtprlvmO4cfbysoOnOc6UiG6Y7Q36kIn8v7xWvkh1+mPvqmIPBtIExb0385z5/ups3MM+2b3ixi3nXy7eREAmREAmREAmRkPWQsw4Xkiz05hMqJEkoI0wIZTQVEC7k8VH0CGDztB5pDRKkXfTWHjJkOMGAX+Fdi0CowqMGCROiDpQRKkR1GcLZ0PtbODf1OUquOULKpzQ+VwitjTIIIYQQ/9wHYyfu5wm8dM0AAAAASUVORK5CYII="/><span className="filter-text"> Filter
                    by Category</span>
                <div className="categories-list" >
                    <a className="category-item " id="shine" href="/">All</a>
                    <a className="category-item" href="/">Artificial Intelligence</a>
                    <a className="category-item" href="/">Cloud Computing</a>
                    <a className="category-item" href="/">DevOps</a>
                    <a className="category-item" href="/">Programming Languages</a>
                    <a className="category-item" href="/">Mobile Application Development</a>
                    <a className="category-item" href="/">Technology And Tools</a>
                    <a className="category-item" href="/">Get a job in a Tech Company</a>
                    <a className="category-item" href="/">Others</a>
                </div>
            </div>
        </section>
        </main>

        <Card/>   
        <Footer/>    

    </>
  );
}

export default App;
