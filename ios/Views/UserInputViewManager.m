//
//  UserInputViewManager.m
//  ReactNative103
//
//  Created by Enrique Oriol on 15/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

//#import "UserInputViewManager.h"
#import "UserInputView.h"
#import <MapKit/MapKit.h>


#import "RCTViewManager.h"

@interface UserInputViewManager : RCTViewManager<UserInputDelegate>

@end


@implementation UserInputViewManager

//TODO: Declare it as a React Native Module


//TODO: export properties


//TODO: export event handler



- (UIView *)view{
  UserInputView* userInputView = [[[NSBundle mainBundle] loadNibNamed:@"UserInputView" owner:nil options:nil] objectAtIndex:0];
  userInputView.delegate = self;
  return userInputView;
}

//delegate methods
- (void) onUserInputUpdate:(UserInputView*)view{
  //TODO: complete method to use callback
}


@end
