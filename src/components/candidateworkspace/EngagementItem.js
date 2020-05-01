import React, {useState} from "react";
import classNames from 'classnames';
import {EngagementButton} from "./EngagementButton";
import './EngagementItem.sass';


export const EngagementItem = (props) => {

    const [mounted, setMounted] = useState(true);
    const [accepted, setAccepted] = useState(null);

    const handleUnmounting = () => setMounted(false);

    const msTimeOut = 1400;

    const handleUnmountWithAcceptance = () => {
        setAccepted(true);
        setTimeout(handleUnmounting, msTimeOut);
        props.onAccept();
    };
    const handleUnmountWithRecejtion = () => {
        setAccepted(false);
        setTimeout(handleUnmounting, msTimeOut);
        props.onReject();
    };

    const flipCardAcceptClass = classNames({
        "accept": true,
        "activated": accepted
    });
    const flipCardRejectClass = classNames({
        "reject": true,
        "activated": accepted === false
    });

    const contentClass = classNames({
        "content": true,
        "selected": accepted !== null,
        "accepted": accepted,
        "rejected": accepted === false
    });

    return (
        mounted &&
        <div className={"engagement-item"}>
            <div className={"flip-card"}>
                <div className={flipCardAcceptClass}>
                    <h2>accept</h2>
                </div>
                <div className={flipCardRejectClass}>
                    <h2>reject</h2>
                </div>
            </div>
            <div className={contentClass}>
                <h3>Invite from<br/>{props.recruiterLogin}</h3>
                <p>Company:<br/>{props.companyName}</p>
                <div className="btns">
                    <EngagementButton
                        type={"reject-btn"}
                        onClick={handleUnmountWithRecejtion}>
                        Reject
                    </EngagementButton>
                    <EngagementButton
                        type={"accept-btn"}
                        onClick={handleUnmountWithAcceptance}>
                        Accept
                    </EngagementButton>
                </div>
            </div>
        </div>
    );
};