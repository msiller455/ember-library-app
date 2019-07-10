import Controller from '@ember/controller';
import { match, not, gte, and } from '@ember/object/computed';

export default Controller.extend({
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isMessageLongEnough: gte('message.length', 5),
    isDisabled: not('isValid'),
    isValid: and('isValidEmail', 'isMessageLongEnough'),
    actions: {
        sendMessage: function() {
            const email = this.get('emailAddress')
            const message = this.get('message')
            alert('Sending message, in progress...')
            const responseMessage = 'To: ' + email + ', Message: ' + message
            this.set('responseMessage', responseMessage);
            this.set('emailAddress', '');
        }
    }
});
