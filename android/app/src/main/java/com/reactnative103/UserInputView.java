package com.reactnative103;

import android.content.Context;
import android.view.LayoutInflater;
import android.view.View;
import android.widget.Button;
import android.widget.EditText;
import android.widget.RelativeLayout;
import android.widget.TextView;

/**
 * Created by albertoirurueta on 16/7/16.
 */
public class UserInputView extends RelativeLayout {

    private TextView mGreeting;
    private EditText mName;
    private EditText mLastName;
    private Button mButton;

    private UserInputViewListener mListener;

    public UserInputView(Context context) {
        super(context);

        LayoutInflater inflater = (LayoutInflater)context.getSystemService
                (Context.LAYOUT_INFLATER_SERVICE);
        View v = inflater.inflate(R.layout.user_input_view, this);

        mGreeting = (TextView)v.findViewById(R.id.greeting);
        mName = (EditText)v.findViewById(R.id.name);
        mLastName = (EditText)v.findViewById(R.id.lastName);
        mButton = (Button)v.findViewById(R.id.button);

        mButton.setOnClickListener(new OnClickListener() {
            @Override
            public void onClick(View v) {
                if(mListener != null) {
                    mListener.onUserInputUpdate(UserInputView.this);
                }
            }
        });
    }

    public String getName() {
        return mName.getText().toString();
    }

    public void setName(String name) {
        mName.setText(name);
    }

    public String getLastName() {
        return mLastName.getText().toString();
    }

    public void setLastName(String lastName) {
        mLastName.setText(lastName);
    }

    public UserInputViewListener getListener() {
        return mListener;
    }

    public void setListener(UserInputViewListener listener) {
        mListener = listener;
    }

    public interface UserInputViewListener {
        void onUserInputUpdate(UserInputView view);
    }
}
