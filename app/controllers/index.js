import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    responseMessage: '',
    emailAddress: '',
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not('isValid'),
    headerMessage: 'Coming Soon',
    actions: {
        saveInvitation() {
            const email = this.get('emailAddress')
            const newInvitation = this.store.createRecord('invitation', {email: email})
            newInvitation.save()
            
            this.set('responseMessage', `Thank you! We've just saved your email address: ${this.get('emailAddress')}`)
            this.set('emailAddress', '')
        }
    }
});
