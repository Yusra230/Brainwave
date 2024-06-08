
const SignUpActiveCards = ({ item, clicked, setClicked }) => {
    // const [clicked , setClicked] = useState('true1');

    const cardClick = () => {
        console.log(`clicked ${item.id}`);
        setClicked(`true${item.id}`)
    }
    
    return <> <div className="col signupActiveCard mb-3" onClick={() => cardClick()}>
        <div className={`card h-100 ${clicked == `true${item.id}` ? 'activeCard' : 'borderr'}`}>
            <div className="card-body text-start">
                <p className="card-id">0{item.id}.</p>
                <h5 className="card-title text-white mb-3">{item.title}</h5>
                <p className={`${clicked == `true${item.id}` ? 'card-text-block' : 'card-text-none'}`}>{item.description}</p>
            </div>
        </div>
    </div>
    </>
}
export default SignUpActiveCards;