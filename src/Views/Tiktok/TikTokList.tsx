import React from 'react';

const ids: string[] = ["7009660294469324037", "6929955375391247621"];


export const TikTokList = () => {
    return (
    <div style={{paddingTop: '30px'}}>
    {ids.map((id) => {
        return <TiktokEmbed url={id}/>
    })}
    </div>
    )
}

const TiktokEmbed = (props: {url: string}): JSX.Element => {
    return(
      <iframe
        height="480"
        src={`https://www.tiktok.com/embed/${props.url}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Embedded tiktok"
      />
    )
};