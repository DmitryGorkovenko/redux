var photos = ['images/cat.jpg', 'images/dog.jpg', 'images/ow1.jpg'];

var myNews = [
    {
        id: 1
        ,author: 'Саша Печкин'
        ,text: 'В четверг, четвертого числа...'
        ,bigText: 'в четыре с четвертью часа четыре чёрненьких чумазеньких чертёнка чертили чёрными чернилами чертёж.'
    }
    ,{
        id: 2
        ,author: 'Просто Вася'
        ,text: 'Считаю, что $ должен стоить 35 рублей!'
        ,bigText: 'А евро 42!'
    }
    ,{
        id: 3
        ,author: 'Гость'
        ,text: 'Бесплатно. Скачать. Лучший сайт - http://localhost:3000'
        ,bigText: 'На самом деле платно, просто нужно прочитать очень длинное лицензионное соглашение'
    }
];

var Article = React.createClass({
    displayName: 'Article',
    propTypes: {
        article: React.PropTypes.shape({
            author: React.PropTypes.string.isRequired,
            text: React.PropTypes.string.isRequired,
            bigText: React.PropTypes.string.isRequired
        })
    },
    getInitialState() {
        return {
            visible: false  
        };
    },
    readmoreClick(e) {
        e.preventDefault();
        this.setState({visible: true});
    },
    render() {
        var article = this.props.article,
            visible = this.state.visible;

        return (
            <div className="article">
                <p className="author">{article.author}:</p>
                <p className="text">{article.text}</p>
                <a 
                    href="#" 
                    onClick={this.readmoreClick} 
                    className={'readmore ' + (visible ? 'hidden':'')}>
                    Подробнее
                </a>
                <p className={'big-text ' + (visible ? '':'hidden')}>{article.bigText}</p>
            </div>
        );
    }
});

var News = React.createClass({
    propTypes: {
        news: React.PropTypes.array.isRequired
    },
    getInitialState() {
        return {
            counter: 0  
        };
    },
    render: function() {
        var news = this.props.news;
        var counter = this.state.counter;
        var newsTemplate;
        if (news.length > 0) {
            newsTemplate = news.map(function(item) {
                return (
                    <div key={item.id}>
                        <Article article={item} />
                    </div>
                )
            })  
        } else {
            newsTemplate = <p>К сожалению, новостей нет.</p>
        }
        return (
            <div className="news">
                {newsTemplate}
                <p className={news.length > 0 ? 'count':'hidden'}>
                    <strong>Новостей всего: {news.length}</strong>
                </p>
            </div>
        )
    }
});

var TextInput = React.createClass({
    displayName: 'TextInput',
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.myTextInput).focus();  
    },
    onClickHandler() {
        console.log(this.refs);
        alert(ReactDOM.findDOMNode(this.refs.myTextInput).value);
    },
    render() {
        return (
            <div>
                <input 
                    className='text-input'
                    onChange={this.onChangeHandler}
                    defaultValue=''
                    placeholder='введите значение'
                    ref='myTextInput'
                />
                <button onClick={this.onClickHandler} ref='myBtn'>Показать</button>
            </div>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <h3>Новости</h3>
                <TextInput />
                <News news={myNews} />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
)