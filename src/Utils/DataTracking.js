import * as amplitude from '@amplitude/analytics-browser';

// const commonProperties = {
//     url: window.location.href ?? "not-set",
//     userId: uniqueUserId ?? "not-set",
//     isMobileView: isMobileView ?? "not-set",
//     pageTitle: document.title ?? "not-set",
//     isMouseTrailDisabled: isMouseTrailDisabled ?? "not-set",
//     currentTimeStamp: currentTimeStamp ?? "not-set",
// }

export function TrackEvent({
    element=null,
    eventName="",
    eventProperties=null,
}){
    if(element){
        try{
            const {name=null,data=null} = JSON.parse(element?.target?.closest('.event-track')?.dataset?.event_data || "{}");
            if(name){
                amplitude.track(name,data);
            }
        }catch(err){
            amplitude.track("error-event",{
                message:err?.message,
                element: element,
                eventName: eventName,
                eventProperties: eventProperties
            })
        }
    }else if(eventName){
        amplitude.track(eventName, eventProperties);
    }
}