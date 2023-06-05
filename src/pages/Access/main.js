import React from "react";

function Main() {
  return (
    <>
      <main className="main">
        <section className="container">
          <div className="d-flex justify-content-between page__acess">
             <section className='access__Iz'>
                <h2>DeSN Defi Social Network</h2>
             </section>
             <section className='access__De p-3'>
                <h2 class='text-center pt-5'>RYO</h2>
                <form className='access__Form mt-5'>
                    <fieldset>
                        <input type='text' name='username' placeholder='username' />
                    </fieldset>

                    <fieldset>
                        <input type='text' name='password' placeholder='password' />
                    </fieldset>

                    <article className='acess__Form--Actions pt-4 pb-4'>

                        <div className='actions__Login'>
                            <button className='btn btn-default'>Login</button>
                        </div>

                        <div className='actions__Login'>
                            <a className='btn btn-default'>Register</a>
                        </div>

                        <a href='#' className='text-center d-block mt-4'>
                          Forgot password?
                        </a>

                    </article>

                    <hr />

                    <article className='access__Form--Dex pt-5'>

                      <button className='dex__Metamask btn'>
                        <img src='/images/metamask.svg' width='30' />
                        Metamask
                      </button>

                    </article>

                </form>
             </section>
          </div>
        </section>
      </main>
    </>
  );
}

export default Main;
