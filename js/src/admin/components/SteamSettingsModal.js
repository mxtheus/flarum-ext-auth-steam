import SettingsModal from 'flarum/components/SettingsModal';
import BooleanItem from "./settings/BooleanItem";

export default class SteamSettingsModal extends SettingsModal {
    className() {
        return 'AuthSteamSettingsModal Modal--small';
    }

    title() {
        return app.translator.trans('nomiscz-auth-steam.admin.settings.title');
    }

    form() {
        return [
            <div className="Form-group">
                <label>{app.translator.trans('nomiscz-auth-steam.admin.settings.api_key_label')}</label>
                <input className="FormControl" bidi={this.setting('flarum-ext-auth-steam.api_key')}/>
            </div>,
            <div className="Form-group">
                <BooleanItem key={'flarum-ext-auth-steam.use_steam_powered_domain'}>
                    {app.translator.trans('nomiscz-auth-steam.admin.settings.use_steam_powered_domain')}
                </BooleanItem>
            </div>
        ];
    }
}
