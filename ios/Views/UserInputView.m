//
//  UserInputView.m
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "UserInputView.h"

@implementation UserInputView

- (void)setFirstName:(NSString *)firstName {
  self.firstNameInput.text = firstName;
}

- (void)setLastName:(NSString *)lastName {
  self.lastNameInput.text = lastName;
}

@end
