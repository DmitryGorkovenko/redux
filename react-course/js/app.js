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

var Add = React.createClass({
    displayName: 'Add',
    getInitialState() {
        return {
            checkrule: false,
            isBtnDisabled : true
        };
    },
    componentDidMount() {
        ReactDOM.findDOMNode(this.refs.author).focus();  
    },
    onBtnClickHandler(e) {
        e.preventDefault();
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        alert(author + '\n' + text);
    },
    checkBtnDisabled() {
        this.setIsBtnDisabled(this.state.checkrule);
    },
    setIsBtnDisabled(checkrule) {
        var author = ReactDOM.findDOMNode(this.refs.author).value;
        var text = ReactDOM.findDOMNode(this.refs.text).value;
        var isBtnDisabled = !checkrule;
        if (!author) isBtnDisabled = true;
        if (!text) isBtnDisabled = true;
        this.setState({checkrule: checkrule, isBtnDisabled: isBtnDisabled});
    },
    onChangeRuleClick() {
        var checkrule = !this.state.checkrule;
        this.setIsBtnDisabled(checkrule);
    },
    render() {
        var checkrule = this.state.checkrule;
        var isBtnDisabled = this.state.isBtnDisabled;
        return (
            <form className="add cf">
                <input
                    type="text"
                    className='add__author'
                    defaultValue=''
                    placeholder='Ваше имя'
                    ref='author'
                    onChange={this.checkBtnDisabled}
                />
                <textarea
                    className="add__text"
                    defaultValue=""
                    placeholder="Текст новости"
                    ref="text"
                    onChange={this.checkBtnDisabled}
                ></textarea>
                <label className="add__checkrule">
                    <input defaultChecked={checkrule} type="checkbox" ref="checkrule" onChange={this.onChangeRuleClick} />Я согласен с правилами
                </label>
                <button disabled={isBtnDisabled} className="add__btn" onClick={this.onBtnClickHandler} ref='myBtn'>Показать</button>
            </form>
        );
    }
});

var App = React.createClass({
    render: function() {
        return (
            <div className="app">
                <Add />
                <h3>Новости</h3>
                <News news={myNews} />
            </div>
        )
    }
});

ReactDOM.render(
    <App />,
    document.getElementById('root')
)