const React = require('react')
const Def = require('./default')

function Error404(){
    return (
        <Def>
            <main>
                <h1>404: PAGE NOT FOUND</h1>
                <div style={{textAlign: 'center'}}>
                    <img src="/images/cat-404.jpg" alt="Cat 404"/>
                    <div>
                        Photo courtesy of <a href="https://www.pinterest.com/pin/857232110306378403/">novatrending.com</a>
                    </div>
                </div>
            </main>
        </Def>
    )
}

module.exports = Error404