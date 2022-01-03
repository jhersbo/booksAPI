const React = require('react')
const Def = require('./default')

function Home(){
    return (
        <Def>
            <main>
                <h1>HOME</h1>
                <div>
                    <img src="/images/flat-vegetables.jpg" alt="Vegetable Image" />
                    <div>
                        Photo by Ella Olsson from <a href="https://www.pexels.com/photo/flat-lay-photography-of-vegetable-salad-on-plate-1640777/">Pexels</a>
                    </div>
                </div>
                <a href="/books">
                    <button className='btn-primary'>Books Page</button>
                </a>
            </main>
        </Def>
    )
}

module.exports = Home