import CodeClip from '../../../CodeClip';
import Doc from '../../Doc';

const Installation = () => {
    return (
        <Doc title="Installation" next="/documentation/v0/quick-start">
            <p>
                Blinds is a package used to easily add dark mode to a website. But before using blinds, it has to be set up in your project. This guide contains instructions for setting up blinds for use in your website.
            </p>

            <h3>Getting blinds</h3>
            <p>
                You can get blinds in 2 ways:
            </p>
                <ul>
                    <li className="ml-3 text-sm mt-3">1. Via CDN, and</li>
                    <li className="ml-3 text-sm mt-3 mb-3">2. Via NPM</li>
                </ul>
            <p>
                The method you choose will largely depend on how you are building (or built) your website.<br />
                If you are building your website using NPM and NPM packages, for example React, then you will want to get blinds via NPM. Otherwise, you should get blinds into your project via CDN.
                We will first deal with getting blinds via CDN, and then afterwards via NPM.
            </p>

            <h3>Via CDN</h3>
            <p>
                If you wish to make use of the NPM option instead, you can skip this section. <a className="link" href="#npm">Click this link to jump to the NPM section</a>.
            </p>
            <p>
                To get blinds via CDN, add the following code to your HTML:
            </p><br />
            {/* <CodeEmbed title="blindscdn0" width="100%" height="120" script="https://gist.github.com/Ikennaf1/f1da00a417cf87666b6652e8a126dc97.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="viacdn">
                    {`<script src="https://cdn.jsdelivr.net/gh/Ikennaf1/blinds@latest/dist/blinds.min.js" defer></script>`}
                </CodeClip>
            </div>
            

            <h3 id="npm">Via NPM</h3>
            <p>
                To get blinds via NPM, open your terminal and make sure you are in your project&apos;s root directory.<br />
                Run the following command in your root directory to get blinds install to your project:
            </p><br />
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="vianpm">
                    npm install --save blinds
                </CodeClip>
            </div>
        </Doc>
    );
}

export default Installation;
