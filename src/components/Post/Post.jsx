import cn from 'classnames';
import s from './Post.module.css';

function Post({autor, children: inkall,...props}) {

    
    
    console.log(s)
    
    return (
        <>
        <div className={`${s.container} test`}>
            
            
            
            <div className={cn('text', { 'color-red': true })}>{` ${props.date} `}{inkall}</div>
            {props.content && <div className="post_content">{props.content}</div>}
            {props.raz && props.raz}
        </div>
        </>
    )
}

export default Post;
//     const margin = 40

// let ant = {
//     color: 'red',
//     background: 'blue',
//     margin:`${margin}px`
// }
// let ant2 = {
//     color: 'green'
// }

// let ant3 = true