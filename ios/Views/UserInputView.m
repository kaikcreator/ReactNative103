//
//  UserInputView.m
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "UserInputView.h"

@implementation UserInputView

//TODO connect IBOutlet text with NSStrig properties

-(IBAction) updateUser: (id)sender{
  if(self.delegate)
     [self.delegate onUserInputUpdate:self];
}

@end
