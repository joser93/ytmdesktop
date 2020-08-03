const settingsProvider = require('../providers/settingsProvider')
const { isLinux } = require('./systemInfo')

if (isLinux()) {
    settingsProvider.setInitialValue('titlebar-type', 'system') // With system title bar
} else {
    settingsProvider.setInitialValue('titlebar-type', 'nice') // Without system title bar
}

settingsProvider.setInitialValue('settings-page-zoom', 100) // 100

settingsProvider.setInitialValue('last-fm-login', {
    username: '',
    password: '',
}) // Empty user and pass

settingsProvider.setInitialValue('settings-app-language', 'en') // English

settingsProvider.setInitialValue('settings-miniplayer-size', '200') // Normal size

settingsProvider.setInitialValue('settings-miniplayer-resizable', true) // Normal size

settingsProvider.setInitialValue('settings-lyrics-provider', '1') // OVH

settingsProvider.setInitialValue('settings-companion-server-protect', true) // Yes

settingsProvider.setInitialValue(
    // Random token
    'settings-companion-server-token',
    Math.random().toString(36).substr(2, 5).toUpperCase()
)

settingsProvider.setInitialValue(
    'settings-enable-double-tapping-show-hide',
    true
) // Yes

settingsProvider.setInitialValue('settings-enable-taskbar-progressbar', true) // Yes

settingsProvider.setInitialValue('settings-accelerators', {
    'media-play-pause': 'CmdOrCtrl+Shift+Space',
    'media-track-next': 'CmdOrCtrl+Shift+PageUp',
    'media-track-previous': 'CmdOrCtrl+Shift+PageDown',
    'media-track-like': 'CmdOrCtrl+Shift+L',
    'media-track-dislike': 'CmdOrCtrl+Shift+D',
    'media-volume-up': 'CmdOrCtrl+Shift+Up',
    'media-volume-down': 'CmdOrCtrl+Shift+Down',
})

settingsProvider.setInitialValue('has-updated', false)

settingsProvider.setInitialValue('discord-presence-settings', {
    details: true,
    state: true,
    time: true,
    hideIdle: true,
})

settingsProvider.setInitialValue(
    'settings-disable-hardware-acceleration',
    false
)
