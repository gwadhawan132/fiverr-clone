import React from 'react'
import { Link } from 'react-router-dom'
import './Message.scss'

export default function Message(){
    return (
        <div className="message">
            <div className="container">
                <span className="breadCrumbs">
                    <Link to='/messages'>MESSAGES</Link> > JOHN DOE >
                </span>
                <div className="messages">
                    <div className="item">
                        <img src="../images/man.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>


                    <div className="item owner">
                        <img src="../images/profile1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>

                    <div className="item">
                        <img src="../images/man.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>

                    <div className="item owner">
                        <img src="../images/profile1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>

                    <div className="item owner">
                        <img src="../images/profile1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>

                    <div className="item ">
                        <img src="../images/profile1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>

                    <div className="item owner">
                        <img src="../images/profile1.png" alt="" />
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque quisquam distinctio enim illum mollitia, placeat deserunt culpa sunt, laboriosam fuga quia. Eligendi earum ex atque. Ipsum, modi minima. Totam, officia.</p>
                    </div>
                </div>
                <hr />
            <div className="write">
                <textarea name="" placeholder='write a message' id="" cols="30" rows="10"></textarea>
                <button>Send</button>
            </div>
            </div>
        </div>
        )
};