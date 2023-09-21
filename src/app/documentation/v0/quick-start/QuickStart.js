import Link from 'next/link';
import CodeClip from '../../../CodeClip';
import Doc from '../../Doc';

const QuickStart = () => {
    return (
        <Doc title="Quick Start" prev="/documentation/v0/installation" next="/documentation/v0/custom-styling">
            <p>
                This guide is a continuation of the previous.<br/>
                If you have not installed blinds, and do not know how, now might be a good time to <Link href="/docs/v0/installation" className="link">visit the previous guide</Link>, and follow the instructions.
            </p>

            <h3>Using Blinds</h3>
            <p>
                So you have installed blinds in your project, now is time to actually make use of it.<br />
                In your javascript code, import blinds. If you are using blinds as a script from CDN, you should skip this step.
            </p>
            {/* <CodeEmbed title="blindsInitImport0" width="100%" height="100" script="https://gist.github.com/Ikennaf1/2ebd3e095b5a53dcf4b2b19b216afdf2.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="importinit">
                    {`import { blindsInit } from 'blinds';`}
                </CodeClip>
            </div><br />

            <p>
                Please note that if you are using CDN, blinds must be loaded in the browser before your own javascript for it to work.
                Therefore, it is important that your javascript comes after blinds.
            </p><br />
            {/* <CodeEmbed title="blindsInit0" width="100%" height="100" script="https://gist.github.com/Ikennaf1/1f50dfad3d07747fd0f989a06f96ebc2.js" />             */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="blindsinit">
                    {`blindsInit();`}
                </CodeClip>
            </div><br />

            <p>
                It is now time to show the toggle icons.<br />
                To do that, in your HTML, you must provide the tag where the icons will be displayed, and add to it the id attribute with value: &apos;blinds_id&apos;.
            </p>
            <p>
                The style given below is just an example. You are at liberty to style your icons as you like.
            </p><br />
            {/* <CodeEmbed title="blindsIcon0" width="100%" height="120" script="https://gist.github.com/Ikennaf1/bcef8e8c625c4c1d610be92cb3d0da89.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="settingicons">
                    {`<div id="blinds_id" style="width: 24px; height: 24px; position: fixed; top: 10px; right: 10px;"><div>`}
                </CodeClip>
            </div><br />

            <p>
                The icons are showing, but they do not do anything for now.
                You need to activate the icons, but before that, you need to import the function that does just that.
                If you are using blinds via CDN, you should skip this step.<br />
            </p><br />
            {/* <CodeEmbed title="blindsActivateToggleImport0" width="100%" height="100" script="https://gist.github.com/Ikennaf1/24c8d03584dad603e02ce8aff97caffa.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="importblinds">
                    {`import { blindsInit, blindsToggle } from 'blinds';`}
                </CodeClip>
            </div><br />

            <p>
                Activate the icons.
            </p><br />
            {/* <CodeEmbed title="blindsActivateToggleIcons0" width="100%" height="200" script="https://gist.github.com/Ikennaf1/28823de5f2b51eb7e79196acdafb51d1.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="toggleicons">
{`blindsInit();

document.querySelector('#blinds_id').onclick = () => {
    blindsToggle();
}`}
                </CodeClip>
            </div><br />

            <p>
                Now when you click the icons, your website toggles from dark mode to normal mode. Just like that!<br />
                In the next guide <Link href="/docs/v0/custom-styling" className="link">add custom styling</Link>, we will go through the steps needed for you to enforce your own dark mode style instead of using the default style that comes with blinds.
            </p>
        </Doc>
    );
}

export default QuickStart;
