import CodeClip from '../../../CodeClip';
import Doc from '../../Doc';

const V0CustomIcons = () => {
    return (
        <Doc title="Custom Styling" prev="/documentation/v0/custom-styling" next="/documentation/v0/custom-icons-id">
            <p>
                Just like in styling, you may also not like the default icons that ship with bilinds.
                The good news is you can do something about it. In this guide, you will discover how to easy it is to change the toggle icons from the default, to your own preferred icons (or even text).
            </p>

            <p>
                In order to be able to change the toggle icons, you have to import the function <em>setBlindsIcons</em>.
                If you are using blinds as a script, you should skip this step.
            </p><br />
            {/* <CodeEmbed title="setBlindsIcons0" width="100%" height="120" script="https://gist.github.com/Ikennaf1/fa000af1350c1b896a3726287516d76e.js" /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="importhooks">
                    {`import { blindsInit, blindsToggle, setBlindsStyles, setBlindsIcons } from 'blinds';`}
                </CodeClip>
            </div><br />

            <p>
                For the sake of simplicity, and also to show how flexible blinds is, we are going to use a button that says &apos;Normal&apos; and &apos;Dark&apos; for the normal and dark modes respectively.
            </p><br />
            {/* <CodeEmbed title="setBlindsIcons1" width="100%" height="200" script="https://gist.github.com/Ikennaf1/353be3f1ad46ca60aa78d845db6856c0.js" /><br /> */}
            <div className="w-full max-w-[80vw] sm:max-w-[60vw] md:max-w-[40vw] lg:max-w-[40vw] xl:max-w-[30vw]">
                <CodeClip id="seticons">
                    {`setBlindsIcons({
  "normal": "<button>Normal</button>",
  "dark": "<button>Dark</button>"
});

blindsInit();`}
                </CodeClip>
            </div><br />
            <p>
                Now when you view your webpage, you will see a nice button instead of the default icons that ship with blinds.
            </p>
        </Doc>
    );
}

export default V0CustomIcons;
