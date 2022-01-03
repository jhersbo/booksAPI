const React = require('react')

function Def(html){
    return (
        <html>
            <head>
                <title>Books API</title>
            </head>
            <body>
                <nav>
                    <ul>
                        <li>
                            <a href="/">Home</a>
                        </li>
                        <li>
                            <a href="/books">Books</a>
                        </li>
                        <li>
                            <a href="/books/new">Add Books</a>
                        </li>
                    </ul>
                </nav>
                {html.children}
            </body>
        </html>
    )
}

module.exports = Def