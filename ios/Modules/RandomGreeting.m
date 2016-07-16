//
//  RandomGreeting.m
//  ReactNative103
//
//  Created by Enrique Oriol on 14/7/16.
//  Copyright © 2016 Facebook. All rights reserved.
//

#import "RandomGreeting.h"
#import "RCTLog.h"


static NSArray *_greetings;


@implementation RandomGreeting


  //TODO Declare that it is a React Native Module


  //initialize private data
  + (void)initialize{
    _greetings = @[
                @"Hey %@, whats up bro",
                @"Welcome %@ %@",
                @"Come on! Mr %@ %@ is here",
                @"Ladies & Gentelmen, here is %@ %@",
                @"%@,ey dude!"];
  }


  //private method to get random greetings
  + (NSString *)randomGreeting:(NSString *)firstName lastName:(NSString *)lastName
  {
    NSString* random = [_greetings objectAtIndex:arc4random()%[_greetings count]];
    return [NSString stringWithFormat:random, firstName, lastName];
  };


  //TODO export method sayFirstName


  //TODO export method with custom name method (say), firstName and lastName arguments and return a promise



@end
