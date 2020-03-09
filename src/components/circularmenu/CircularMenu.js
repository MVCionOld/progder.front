import React, {useState, Component} from 'react';
import classNames from 'classnames';
import './CircularMenu.css';


const CircularMenuItem = (props) => (
    <a href={props.href} className="circular-menu__item">
        {props.text}
    </a>
);

const CircularMenuButton = (props) => {
    const [active, setActive] = useState(false);
    const btnStyleClass = classNames({
        "circular-menu__button": true,
        "circular-menu__button_active": active
    });
    let onClick = (e) => {
        e.preventDefault();
        props.onClick();
        setActive(!active);
    };
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" className={btnStyleClass} onClick={onClick}>
            <span className="circular-menu__lines"/>
        </a>
    );
};

export class CircularMenu extends Component {

    constructor(props) {
        super(props);
        const role = this.props.role.toLowerCase();
        this.state = {
            pending: false,
            actions: [
                {
                    "name": "Exit",
                    "href": "/"
                },
                {
                    "name": "Logout",
                    "href": `/${role}/login`
                },
                {
                    "name": "---",
                    "href": "#"
                },
                {
                    "name": "---",
                    "href": "#"
                }
            ]
        }
    }

    render() {

        const onClick = () => {
            let items = document.querySelectorAll('.circular-menu__item');
            const menuItemsAmount = items.length;
            const arc = Math.PI / 2 / (menuItemsAmount - 1);
            const radius = 60;
            if (!this.state.pending) {
                for (let i = 0; i < menuItemsAmount; ++i) {
                    const angle = i * arc - Math.PI;
                    const x = radius * Math.cos(angle);
                    const y = radius * Math.sin(angle);
                    items[i].style.left = 50 + x + '%';
                    items[i].style.top = 50 + y + '%';
                }
            } else {
                for (let item of items) {
                    item.removeAttribute('style');
                }
            }
            this.setState({
                pending: !this.state.pending
            });
        };

        return (
            <div className="circular-menu">
                {this.state.actions.map(
                    action => <CircularMenuItem
                        href={action.href}
                        text={action.name}
                    />
                )}
                <CircularMenuButton onClick={onClick}/>
            </div>
        )
    }
}
